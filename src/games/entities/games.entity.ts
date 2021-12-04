import { Users } from 'src/users/users.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    OneToOne,
} from 'typeorm';

@Entity()
export class Games {
    @PrimaryGeneratedColumn()
    game_id: number;

    @Column()
    cash: number;

    @Column()
    phase: number;

    @Column()
    turn: number;

    @Column()
    is_running: boolean;

    @OneToOne(() => Users, (user) => user.user_id)
    @JoinColumn({ name: 'player_id' })
    @Column()
    player_id: number;

    @Column()
    difficulty: string;

    @Column()
    store_name: string;
}
