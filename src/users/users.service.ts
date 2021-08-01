import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { NewUser, User } from './users.interface';
import * as bcrypt from 'bcrypt';
import { ChangePasswordDto } from '@shared/users.dto';

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

    async setCurrentRefreshToken(refreshToken: string, user_id: number) {
        const refresh_token = await bcrypt.hash(refreshToken, 10);
        await this.usersRepository.update(user_id, { refresh_token });
    }

    async getById(user_id: number) {
        const user = await this.usersRepository.findOne({ user_id });
        if (user) {
            return {
                username: user.username,
                userId: user.user_id,
                refreshToken: user.refresh_token,
            };
        }
        throw new HttpException(
            `User with this id:${user_id} does not exist`,
            HttpStatus.NOT_FOUND,
        );
    }

    async getUserIfRefreshTokenMatches(refreshToken: string, userId: number) {
        const user = await this.getById(userId);
        const isRefreshTokenMatching = await bcrypt.compare(
            refreshToken,
            user.refreshToken,
        );
        if (isRefreshTokenMatching) {
            delete user.refreshToken;
            return user;
        }
    }

    async removeRefreshToken(user_id: number) {
        return this.usersRepository.update(user_id, { refresh_token: null });
    }

    async changePassword(username: string, newPasswordData: ChangePasswordDto) {
        const { oldPassword, newPassword, newPassword2 } = newPasswordData;
        const { password, user_id } = await this.findOne(username);

        const isOldPasswordMatching = await bcrypt.compare(
            oldPassword,
            password,
        );

        if (!isOldPasswordMatching) {
            throw new HttpException(
                'Old password is invalid',
                HttpStatus.BAD_REQUEST,
            );
        }
        if (newPassword !== newPassword2) {
            throw new HttpException(
                'The new passwords are different',
                HttpStatus.BAD_REQUEST,
            );
        }
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        return this.usersRepository.update(user_id, {
            password: hashedNewPassword,
        });
    }

    async updateLastLogin(user_id: number) {
        const time = new Date().toISOString();
        return this.usersRepository.update(user_id, { last_login: time });
    }
}
