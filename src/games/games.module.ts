import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Games } from './entities/games.entity';
import { DistributionCenterModule } from 'src/distribution-center/distribution-center.module';
import { UsersModule } from 'src/users/users.module';
import { StoresModule } from 'src/stores/stores.module';

@Module({
    controllers: [GamesController],
    providers: [GamesService],
    imports: [
        TypeOrmModule.forFeature([Games]),
        DistributionCenterModule,
        UsersModule,
        StoresModule,
    ],
})
export class GamesModule {}
