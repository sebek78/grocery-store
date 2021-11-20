export interface IMenuLink {
    label: string;
    to?: string;
    action?: Function;
}

export interface ApiError {
    statusCode: number;
    message: string;
}

/* Snackbar */

export type SnackbarSeverity = 'error' | 'warning' | 'info' | 'success';

export type SnackbarData = {
    message: string;
    severity: SnackbarSeverity;
    autoHideDuration?: number | null;
};

/* User */

export type UserLoginDto = {
    username: string;
    password: string;
};

export type RegisterUserDto = {
    username: string;
    password: string;
    password2: string;
};

/* Game */

export enum GameDifficulty {
    Easy = 'easy',
    Medium = 'medium',
    Hard = 'hard',
}

export interface NewGame {
    storeName: string;
    difficulty: GameDifficulty;
}

export type NewGameDTO = {
    username: string;
    storeName: string;
    difficulty: GameDifficulty;
};

export interface Game extends NewGame {
    cash: number;
    gameId: number;
    isRunning: boolean;
    phase: number;
    turn: number;
}
