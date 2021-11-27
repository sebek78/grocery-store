import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Games } from './entities/games.entity';
import { DistributionCenterModule } from 'src/distribution-center/distribution-center.module';
import { UsersModule } from 'src/users/users.module';

@Module({
    controllers: [GamesController],
    providers: [GamesService],
    imports: [
        TypeOrmModule.forFeature([Games]),
        DistributionCenterModule,
        UsersModule,
    ],
})
export class GamesModule {}
