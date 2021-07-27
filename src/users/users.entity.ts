import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @Column()
    created_on: string;

    @Column()
    last_login: string;

    @Column({ nullable: true })
    @Exclude()
    refresh_token?: string;
}
