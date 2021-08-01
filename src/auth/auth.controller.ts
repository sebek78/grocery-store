import {
    Body,
    Controller,
    Get,
    Post,
    Req,
    Res,
    UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { AppService } from '../app.service';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { CreateUserDto } from '@shared/users.dto';
import { RequestWithTokenPayload } from './auth.interface';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UsersService } from '../users/users.service';
import JwtRefreshGuard from './jwt-refresh.guard';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly appService: AppService,
        private authService: AuthService,
        private userService: UsersService,
    ) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async logIn(
        @Req() request: RequestWithTokenPayload,
        @Res() response: Response,
    ) {
        const { user } = request;
        const accessTokenCookie = this.authService.getCookieWithJwtToken(user);
        const refreshTokenCookie =
            this.authService.getCookieWithJwtRefreshToken(user);
        const { refreshToken } = refreshTokenCookie;

        await this.userService.setCurrentRefreshToken(
            refreshToken,
            user.userId,
        );
        await this.userService.updateLastLogin(user.userId);

        response.setHeader('Set-Cookie', [
            accessTokenCookie,
            refreshTokenCookie.cookie,
        ]);
        delete user.userId;
        return response.send(user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('authenticate')
    authenticate(@Req() request: RequestWithTokenPayload) {
        const user = request.user;
        delete user.userId;
        return user;
    }

    @UseGuards(JwtAuthGuard)
    @Post('logout')
    async logOut(
        @Req() request: RequestWithTokenPayload,
        @Res() response: Response,
    ) {
        await this.userService.removeRefreshToken(request.user.userId);
        response.setHeader('Set-Cookie', this.authService.getCookieForLogOut());
        return response.sendStatus(200);
    }

    @Post('register')
    async createUser(@Body() userData: CreateUserDto) {
        return this.authService.register(userData);
    }

    @UseGuards(JwtRefreshGuard)
    @Get('refresh')
    refresh(@Req() request: RequestWithTokenPayload) {
        const accessTokenCookie = this.authService.getCookieWithJwtToken(
            request.user,
        );
        request.res.setHeader('Set-Cookie', accessTokenCookie);
        delete request.user.userId;
        return request.user;
    }
}
