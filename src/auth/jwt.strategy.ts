import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly configService: ConfigService,
        private readonly userService: UsersService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (request: Request) => {
                    const token = request?.cookies?.Authentication;
                    if (!token) return null;
                    return token;
                },
            ]),
            secretOrKey: configService.get('JWT_SECRET'),
            ignoreExpiration: false,
        });
    }

    async validate(payload: any) {
        return { userId: payload.userId, username: payload.username };
    }
}
