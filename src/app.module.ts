import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';

import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UsersModule } from './users/users.module';
import { GamesModule } from './games/games.module';
import { DistributionCenterModule } from './distribution-center/distribution-center.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '../..', 'public'),
            exclude: ['/api*'],
        }),
        DatabaseModule,
        UsersModule,
        AuthModule,
        GamesModule,
        DistributionCenterModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
