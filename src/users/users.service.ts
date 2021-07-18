import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { NewUser, User } from './users.interface';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
    ) {}

    async createUser(userData: NewUser) {
        const newUser = await this.usersRepository.create(userData);
        await this.usersRepository.save(newUser);
        return newUser;
    }

    async findOne(username: string): Promise<User | undefined> {
        const user = this.usersRepository.findOne({ username });
        if (user) return user;
        throw new HttpException(
            `User with ${username} name does not exist`,
            HttpStatus.NOT_FOUND,
        );
    }
}
