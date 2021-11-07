import { GameDifficulty } from '@constants';

export interface IMenuLink {
    label: string;
    to?: string;
    action?: Function;
}

export type SnackbarSeverity = 'error' | 'warning' | 'info' | 'success';

export type SnackbarData = {
    message: string;
    severity: SnackbarSeverity;
};

export type UserLoginDto = {
    username: string;
    password: string;
};

export type RegisterUserDto = {
    username: string;
    password: string;
    password2: string;
};

export interface NewGame {
    storeName: string;
    difficulty: GameDifficulty;
}

export type NewGameDTO = {
    username: string;
    storeName: string;
    difficulty: GameDifficulty;
};
