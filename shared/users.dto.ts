export class CreateUserDto {
    username: string;
    password: string;
}

export class LoginUserDto {
    username: string;
    password: string;
}

export class UserLoggedDto {
    'access_token': string;
    'username': string;
}
