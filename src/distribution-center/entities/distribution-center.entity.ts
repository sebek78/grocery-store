import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DistributionCenter {
    @PrimaryGeneratedColumn()
    center_id: number;

    @Column()
    player_id: number;

    @Column()
    game_id: number;

    @Column('varchar', { array: true })
    costs: string[];
}
