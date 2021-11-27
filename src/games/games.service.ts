import { Injectable } from '@nestjs/common';
import { CreateGamesDto } from './dto/create-games.dto';
import { Game } from './content/game';
import { Games } from './entities/games.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { snakeToCamel } from '@shared/functions';
import { DistributionCenterService } from 'src/distribution-center/distribution-center.service';
import { UsersService } from 'src/users/users.service';
// import { UpdateGamesDto } from './dto/update-games.dto';

@Injectable()
export class GamesService {
    constructor(
        @InjectRepository(Games)
        private gamesRepository: Repository<Games>,
        private distributionCenterService: DistributionCenterService,
        private usersService: UsersService,
    ) {}
    async create(createGamesDto: CreateGamesDto) {
        const { username, storeName, difficulty } = createGamesDto;
        const { user_id } = await this.usersService.findOne(username);

        const game = new Game(user_id, storeName, difficulty);
        const newGame = this.gamesRepository.create(game);
        await this.gamesRepository.save(newGame);

        const { game_id } = await this.gamesRepository.findOne({
            where: [{ player_id: user_id }],
            order: { game_id: 'DESC' },
        });
        const distributionCenter = await this.distributionCenterService.create(
            user_id,
            game_id,
        );
        const center = {
            centerId: distributionCenter.center_id,
            costs: distributionCenter.costs[0],
        };

        return { game: newGame, distributionCenter: center };
    }

    async findAllByUserId(user_id: number) {
        const games = await this.gamesRepository.find({
            where: {
                player_id: user_id,
            },
        });

        const res = games
            .map((game) => ({ ...game, player_id: undefined }))
            .map((game) => {
                const parsed = {};
                for (const property in game) {
                    parsed[snakeToCamel(property)] = game[property];
                }
                return parsed;
            });
        return { games: res };
    }

    /*
    findOne(id: number) {
        return `This action returns a #${id} game`;
    }

    update(id: number, updateGamesDto: UpdateGamesDto) {
        return `This action updates a #${id} game`;
    }

    remove(id: number) {
        return `This action removes a #${id} game`;
    }*/
}
