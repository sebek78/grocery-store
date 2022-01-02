import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateGamesDto } from './dto/create-games.dto';
import { Game } from './content/game';
import { Games } from './entities/games.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { keysToCamelCase } from '@shared/functions';
import { DistributionCenterService } from 'src/distribution-center/distribution-center.service';
import { UsersService } from 'src/users/users.service';
import { StoresService } from 'src/stores/stores.service';
import { Response } from 'express';
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

        const gameObject = new Game(user_id, storeName, difficulty);
        const newGame = this.gamesRepository.create(gameObject);
        await this.gamesRepository.save(newGame);

        const gameRaw = await this.gamesRepository.findOne({
            where: [{ player_id: user_id }],
            order: { game_id: 'DESC' },
        });

        const game = keysToCamelCase(gameRaw);
        const distributionCenter = await this.createDistributionCenter(
            gameRaw.game_id,
        );
        const store = await this.createStore(gameRaw.game_id);

        return { game, distributionCenter, store };
    }

    async createDistributionCenter(game_id: number) {
        const distributionCenter = await this.distributionCenterService.create(
            game_id,
        );
        return distributionCenter;
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

        return { games: games.map((game) => keysToCamelCase(game)) };
    }

    async getGameData(gameId: number) {
        const store = await this.storesService.findOne(gameId);
        const distributionCenter = await this.distributionCenterService.findOne(
            gameId,
        );

        if (store && distributionCenter) {
            return {
                store,
                distributionCenter,
            };
        } else {
            throw new HttpException(
                `Nie znaleziono danych gry o id:${gameId}`,
                HttpStatus.NOT_FOUND,
            );
        }
    }

    /*
    update(id: number, updateGamesDto: UpdateGamesDto) {
        return `This action updates a #${id} game`;
    }*/

    async deleteGame(id: string, response: Response) {
        const deletingGameId = Number.parseInt(id, 10);
        if (!deletingGameId) {
            throw new HttpException(
                `Nieprawidłowe id:${id}`,
                HttpStatus.BAD_REQUEST,
            );
        }
        const gameRaw = await this.gamesRepository.findOne(deletingGameId);
        const gameId = gameRaw?.game_id;
        if (!gameId) {
            throw new HttpException(
                `Nie znaleziono gry o id:${id}`,
                HttpStatus.NOT_FOUND,
            );
        }
        const storeId = await this.storesService.getStoreIdByGameId(
            deletingGameId,
        );
        const centerId =
            await this.distributionCenterService.getCenterIdByGameId(
                deletingGameId,
            );
        if (!gameId || !storeId || !centerId) {
            throw new HttpException(
                `Błąd usuwania gry o id:${id}`,
                HttpStatus.SERVICE_UNAVAILABLE,
            );
        }
        await this.distributionCenterService.delete(centerId);
        await this.storesService.delete(storeId);
        await this.gamesRepository.delete(gameId);
        response.status(HttpStatus.OK);
        response.send({ success: true });
    }
}
