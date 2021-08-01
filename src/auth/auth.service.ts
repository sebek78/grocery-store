import bcrypt = require('bcrypt');
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '@shared/users.dto';
import { PostgresErrorCode } from 'src/database/postgresErrorCodes.enum';
import { ConfigService } from '@nestjs/config';
import { TokenPayload } from './auth.interface';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private configService: ConfigService,
    ) {}

    async validateUser(username: string, plainTextPassword: string) {
        try {
            const user = await this.usersService.findOne(username);
            await this.verifyPassword(plainTextPassword, user.password);
            user.password = undefined;
            const payload = {
                username: user.username,
                userId: user.user_id,
            };
            return payload;
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
            const { username } = createdUser;
            return { username };
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

    getCookieWithJwtToken(userPayload: TokenPayload) {
        const token = this.jwtService.sign(userPayload);
        return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get(
            'JWT_EXPIRATION_TIME',
        )}`;
    }

    getCookieForLogOut() {
        return [
            `Authentication=; HttpOnly; Path=/; Max-Age=0`,
            `Refresh=; HttpOnly; Path=/; Max-Age=0`,
        ];
    }

    getCookieWithJwtRefreshToken(userPayload: TokenPayload) {
        const refreshToken = this.jwtService.sign(userPayload, {
            secret: this.configService.get('JWT_REFRESH_TOKEN_SECRET'),
            expiresIn: `${this.configService.get(
                'JWT_REFRESH_TOKEN_EXPIRATION_TIME',
            )}s`,
        });
        const cookie = `Refresh=${refreshToken}; HttpOnly; Path=/; Max-Age=${this.configService.get(
            'JWT_REFRESH_TOKEN_EXPIRATION_TIME',
        )}`;
        return {
            cookie,
            refreshToken,
        };
    }
}
