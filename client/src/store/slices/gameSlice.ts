import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewGameDTO, Game, Store, DistributionCenter } from '@sharedTypes';

interface GameState {
    isRequesting: boolean;
    isGettingGames: boolean;
    deletingGameId: number;
    error: string;
    gameListError: string;
    gameDataError: string;
    games: Game[];
    stores: Store[];
    distributionCenters: DistributionCenter[];
}

const initialState: GameState = {
    isRequesting: false,
    isGettingGames: false,
    deletingGameId: 0,
    error: '',
    gameListError: '',
    gameDataError: '',
    games: [],
    stores: [],
    distributionCenters: [],
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        newGameRequest: (state, action: PayloadAction<NewGameDTO>) => {
            state.isRequesting = true;
            state.error = '';
        },
        newGameSuccess: (
            state,
            action: PayloadAction<{
                game: Game;
                store: any;
                distributionCenter: any;
            }>
        ) => {
            state.isRequesting = false;
            state.games.push(action.payload.game);
            state.stores.push(action.payload.store);
            state.distributionCenters.push(action.payload.distributionCenter);
            state.error = '';
        },
        newGameFailed: (state, action: PayloadAction<string>) => {
            state.isRequesting = false;
            state.error = action.payload;
        },
        getGamesList: (state) => {
            state.isGettingGames = true;
            state.gameListError = '';
        },
        getGamesSuccess: (state, action: PayloadAction<Game[]>) => {
            state.isGettingGames = false;
            state.gameListError = '';
            state.games = action.payload;
        },
        getGamesFailed: (state, action: PayloadAction<string>) => {
            console.log(action.payload);
            state.isGettingGames = false;
            state.gameListError = action.payload;
        },
        getGameDataRequest: (state, action: PayloadAction<number>) => {
            state.isRequesting = true;
            state.error = '';
        },
        getGameDataSuccess: (state, action: PayloadAction<any>) => {
            state.isRequesting = false;
            state.stores.push(action.payload.store);
            state.distributionCenters.push(action.payload.distributionCenter);
            state.error = '';
        },
        getGamesDataFailed: (state, action: PayloadAction<string>) => {
            state.isGettingGames = false;
            state.gameDataError = action.payload;
        },
        deleteGame: (state, action: PayloadAction<number>) => {
            state.deletingGameId = action.payload;
        },
        deleteGameSuccess: (state, action: PayloadAction<number>) => {
            state.deletingGameId = 0;
            state.games = state.games.filter(
                (game) => game.gameId !== action.payload
            );
            state.stores = state.stores.filter(
                (store) => store.gameId !== action.payload
            );
            state.distributionCenters = state.distributionCenters.filter(
                (center) => center.gameId !== action.payload
            );
        },
        deleteGameFailed: (state) => {
            state.deletingGameId = 0;
        },
    },
});

export const {
    newGameRequest,
    newGameSuccess,
    newGameFailed,
    getGamesList,
    getGamesSuccess,
    getGamesFailed,
    getGameDataRequest,
    getGameDataSuccess,
    getGamesDataFailed,
    deleteGame,
    deleteGameSuccess,
    deleteGameFailed,
} = gameSlice.actions;

export default gameSlice.reducer;
