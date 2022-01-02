export interface IMenuLink {
    label: string;
    to?: string;
    action?: Function;
}

export interface ApiError {
    statusCode: number;
    message: string;
}

export interface SuccessResponse extends ApiError {
    success: boolean;
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

/*  Store */

export enum ProductType {
    Produce = 'Warzywa i owoce',
    Bakery = 'Pieczywo',
    Dairy = 'Nabiał',
    DryGoods = 'Produkty suche',
    Frozen = 'Mrożonki',
}

export interface Product {
    id: number;
    productType: ProductType;
    isOnSale: boolean;
    price: number;
    onSalePrice: number;
    expirationDate: number;
}

export interface Store {
    storeId: number;
    gameId: number;
    store: Product[];
}

export interface DistributionCenter {
    centerId: number;
    gameId: number;
    costs: number[];
}
