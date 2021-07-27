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
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { CreateUserDto } from '@shared/users.dto';
import { RequestWithTokenPayload } from './auth/auth.interface';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { UsersService } from './users/users.service';
import JwtRefreshGuard from './auth/jwt-refresh.guard';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private authService: AuthService,
        private userService: UsersService,
    ) {}

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
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

        response.setHeader('Set-Cookie', [
            accessTokenCookie,
            refreshTokenCookie.cookie,
        ]);
        return response.send(user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('auth/authenticate')
    authenticate(@Req() request: RequestWithTokenPayload) {
        const user = request.user;
        return user;
    }

    @UseGuards(JwtAuthGuard)
    @Post('auth/logout')
    async logOut(
        @Req() request: RequestWithTokenPayload,
        @Res() response: Response,
    ) {
        await this.userService.removeRefreshToken(request.user.userId);
        response.setHeader('Set-Cookie', this.authService.getCookieForLogOut());
        return response.sendStatus(200);
    }

    @Post('auth/register')
    async createUser(@Body() userData: CreateUserDto) {
        return this.authService.register(userData);
    }

    @UseGuards(JwtRefreshGuard)
    @Get('auth/refresh')
    refresh(@Req() request: RequestWithTokenPayload) {
        const accessTokenCookie = this.authService.getCookieWithJwtToken(
            request.user,
        );
        request.res.setHeader('Set-Cookie', accessTokenCookie);
        return request.user;
    }
}
