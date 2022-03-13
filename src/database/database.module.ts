import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Users } from 'src/users/users.entity';
import { Games } from 'src/games/entities/games.entity';
import { DistributionCenter } from 'src/distribution-center/entities/distribution-center.entity';
import { Stores } from 'src/stores/entities/store.entity';
import { Customers } from 'src/customers/entities/customers.entity';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
                if (process.env.NODE_ENV !== 'production') {
                    return {
                        type: 'postgres',
                        host: configService.get('DB_HOST'),
                        port: configService.get('DB_PORT'),
                        username: configService.get('DB_USERNAME'),
                        password: configService.get('DB_PASSWORD'),
                        database: configService.get('DB_DATABASE'),
                        entities: [
                            Users,
                            Games,
                            DistributionCenter,
                            Stores,
                            Customers,
                        ],
                    };
                } else {
                    const credentials: string[] =
                        process.env.DATABASE_URL.split(':');
                    return {
                        type: 'postgres',
                        username: credentials[1].substring(2),
                        password: credentials[2].split('@')[0],
                        host: credentials[2].split('@')[1],
                        port: Number.parseInt(credentials[3].split('/')[0]),
                        database: credentials[3].split('/')[1],
                        entities: [
                            Users,
                            Games,
                            DistributionCenter,
                            Stores,
                            Customers,
                        ],
                        ssl: {
                            rejectUnauthorized: false,
                        },
                    };
                }
            },
        }),
    ],
})
export class DatabaseModule {}
