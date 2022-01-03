import { GameDifficulty } from '@shared/types';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateGamesDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    storeName: string;

    @IsString()
    @IsNotEmpty()
    difficulty: GameDifficulty;
}
