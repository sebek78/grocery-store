import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

    @Column()
    player_id: number;

    @Column()
    difficulty: string;

    @Column()
    store_name: string;
}
