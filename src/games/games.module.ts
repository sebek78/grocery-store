import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../users/users.entity';
import { Games } from './entities/games.entity';

@Module({
    controllers: [GamesController],
    providers: [GamesService],
    imports: [
        TypeOrmModule.forFeature([Users]),
        TypeOrmModule.forFeature([Games]),
    ],
})
export class GamesModule {}
