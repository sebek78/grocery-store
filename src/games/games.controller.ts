import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
} from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGamesDto } from './dto/create-games.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
// import { UpdateGamesDto } from './dto/update-games.dto';

@Controller('games')
export class GamesController {
    constructor(private readonly gamesService: GamesService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createGamesDto: CreateGamesDto) {
        return this.gamesService.create(createGamesDto);
    }
    /*
    @Get()
    findAll() {
        return this.gameService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.gameService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateGamesDto: UpdateGamesDto) {
        return this.gameService.update(+id, updateGamesDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.gameService.remove(+id);
    }*/
}
