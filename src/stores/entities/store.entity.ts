import { Games } from 'src/games/entities/games.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    OneToOne,
} from 'typeorm';

@Entity()
export class Stores {
    @PrimaryGeneratedColumn()
    store_id: number;

    @OneToOne(() => Games, (game) => game.game_id)
    @JoinColumn({ name: 'game_id' })
    game_id: number;

    @Column()
    store: string;

    @Column()
    stock_room: string;
}
