import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
    Req,
} from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGamesDto } from './dto/create-games.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RequestWithTokenPayload } from 'src/auth/auth.interface';
// import { UpdateGamesDto } from './dto/update-games.dto';

@Controller('games')
export class GamesController {
    constructor(private readonly gamesService: GamesService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createGamesDto: CreateGamesDto) {
        return this.gamesService.create(createGamesDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    findAllByUserId(@Req() req: RequestWithTokenPayload) {
        return this.gamesService.findAllByUserId(req.user.userId);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.gamesService.getGameData(Number.parseInt(id, 10));
    }

    /*
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateGamesDto: UpdateGamesDto) {
        return this.gameService.update(+id, updateGamesDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.gameService.remove(+id);
    }*/
}
