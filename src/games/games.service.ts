import { Injectable } from '@nestjs/common';
import { CreateGamesDto } from './dto/create-games.dto';
import { Game } from './content/game';
import { Games } from './entities/games.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { snakeToCamel } from '@shared/functions';
import { DistributionCenterService } from 'src/distribution-center/distribution-center.service';
import { UsersService } from 'src/users/users.service';
import { StoresService } from 'src/stores/stores.service';
// import { UpdateGamesDto } from './dto/update-games.dto';

@Injectable()
export class GamesService {
    constructor(
        @InjectRepository(Games)
        private gamesRepository: Repository<Games>,
        private distributionCenterService: DistributionCenterService,
        private usersService: UsersService,
        private storesService: StoresService,
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
        const center = await this.createDistributionCenter(game_id);
        const store = await this.createStore(game_id);

        return { game: newGame, distributionCenter: center, store };
    }

    async createDistributionCenter(game_id: number) {
        const distributionCenter = await this.distributionCenterService.create(
            game_id,
        );
        const center = {
            centerId: distributionCenter.center_id,
            costs: distributionCenter.costs[0],
            gameId: distributionCenter.game_id,
        };
        return center;
    }

    async createStore(game_id: number) {
        const store = await this.storesService.create(game_id);
        return store;
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
