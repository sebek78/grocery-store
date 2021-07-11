import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './user.entity';

interface User {
    userId: number;
    username: string;
    password: string;
}

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'john',
            password: 'changeme',
        },
        {
            userId: 2,
            username: 'maria',
            password: 'guess',
        },
    ];
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
    ) {}
    findAll(): Promise<Users[]> {
        return this.usersRepository.find();
    }
    async findOne(username: string): Promise<User | undefined> {
        return this.users.find((user) => user.username === username);
    }
}
