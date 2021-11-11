import { Injectable } from '@nestjs/common';
import { CreateGamesDto } from './dto/create-games.dto';
import { Game } from './content/game';
import { Games } from './entities/games.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../users/users.entity';
// import { UpdateGamesDto } from './dto/update-games.dto';

@Injectable()
export class GamesService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
        @InjectRepository(Games)
        private gamesRepository: Repository<Games>,
    ) {}
    async create(createGamesDto: CreateGamesDto) {
        const { username, storeName, difficulty } = createGamesDto;
        const { user_id } = await this.usersRepository.findOne({ username });
        const game = new Game(user_id, storeName, difficulty);

        const newGame = this.gamesRepository.create(game);
        await this.gamesRepository.save(newGame);
        return newGame;
    }
    /*
    findAll() {
        return `This action returns all game`;
    }

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
