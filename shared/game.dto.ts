import { IsString, IsNotEmpty } from 'class-validator';

export class NewGameDTO {
    @IsString()
    @IsNotEmpty()
    username: string;
}
