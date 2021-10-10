import { IsString, IsNotEmpty, MinLength, IsOptional } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string;
}

export class ChangePasswordDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @IsOptional()
    oldPassword: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @IsOptional()
    newPassword: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @IsOptional()
    newPassword2: string;
}
