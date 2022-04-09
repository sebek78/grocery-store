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

export interface GameDataDTO {
    store: Store;
    distributionCenter: DistributionCenter;
    customers: CustomersDTO;
}

export interface NewGameDataDTO extends GameDataDTO {
    game: Game;
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
    expirationDate: number;
}

export interface Price {
    isOnSale: boolean;
    onSalePrice: number;
    price: number;
}

export type PricesType = {
    [key in ProductType]: Price;
};

export interface Store {
    storeId: number;
    gameId: number;
    store: Product[];
    prices: PricesType;
    stockRooom: Product[];
}

export interface DistributionCenter {
    centerId: number;
    gameId: number;
    costs: string;
}

export interface ICustomer {
    name: string;
    coupons: number;
    completed: number;
    penalty: number;
    needs: (keyof ProductType)[];
    hidden?: boolean;
}

export interface CustomersDTO {
    customersId: number;
    customersData: string[];
    gameId: number;
}
