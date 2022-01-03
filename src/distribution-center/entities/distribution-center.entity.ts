import { Games } from 'src/games/entities/games.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    OneToOne,
} from 'typeorm';

@Entity()
export class DistributionCenter {
    @PrimaryGeneratedColumn()
    center_id: number;

    @OneToOne(() => Games, (game) => game.game_id)
    @JoinColumn({ name: 'game_id' })
    game_id: number;

    @Column('varchar', { array: true })
    costs: string[];
}
