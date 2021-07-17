import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { CreateUserDto } from '@shared/users.dto';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private authService: AuthService,
    ) {}

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async logIn(@Request() req) {
        return req.user;
    }

    @Post('auth/register')
    async createUser(@Body() userData: CreateUserDto) {
        return this.authService.register(userData);
    }
}
