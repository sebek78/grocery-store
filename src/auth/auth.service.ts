import bcrypt = require('bcrypt');
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '@shared/users.dto';
import { PostgresErrorCode } from 'src/database/postgresErrorCodes.enum';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async validateUser(username: string, plainTextPassword: string) {
        try {
            const user = await this.usersService.findOne(username);
            await this.verifyPassword(plainTextPassword, user.password);
            user.password = undefined;
            const payload = {
                username: user.username,
                sub: user.user_id,
            };
            return {
                access_token: this.jwtService.sign(payload),
                username: user.username,
            };
        } catch (error) {
            throw new HttpException(
                'Wrong credentials provided',
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    private async verifyPassword(
        plainTextPassword: string,
        hashedPassword: string,
    ) {
        const isPasswordMatching = await bcrypt.compare(
            plainTextPassword,
            hashedPassword,
        );
        if (!isPasswordMatching) {
            throw new HttpException(
                'Wrong credentials provided',
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    async register(registrationData: CreateUserDto) {
        const hashedPassword = await bcrypt.hash(registrationData.password, 10);
        try {
            const time = new Date().toISOString();
            const createdUser = await this.usersService.createUser({
                ...registrationData,
                password: hashedPassword,
                created_on: time,
            });
            createdUser.password = undefined;
            return createdUser;
        } catch (error) {
            if (error?.code === PostgresErrorCode.UniqueViolation) {
                throw new HttpException(
                    'User already exists',
                    HttpStatus.BAD_REQUEST,
                );
            }
            throw new HttpException(
                'Something went wrong',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}
