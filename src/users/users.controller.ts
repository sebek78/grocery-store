import {
    Body,
    Controller,
    Get,
    Post,
    Req,
    Res,
    UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RequestWithTokenPayload } from 'src/auth/auth.interface';
import { ChangePasswordDto } from '@shared/users.dto';
import { Response } from 'express';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getProfile(@Req() req: RequestWithTokenPayload) {
        delete req.user.userId;
        return req.user;
    }

    @UseGuards(JwtAuthGuard)
    @Post('change-password')
    async changePassword(
        @Body() newPasswordData: ChangePasswordDto,
        @Req() req: RequestWithTokenPayload,
        @Res() res: Response,
    ) {
        const username = req.user.username;
        await this.usersService.changePassword(username, newPasswordData);
        return res.status(200).send();
    }
}
