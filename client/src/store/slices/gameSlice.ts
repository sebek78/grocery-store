import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewGameDTO, Game } from '@sharedTypes';

interface GameState {
    isRequesting: boolean;
    isGettingGames: boolean;
    error: string;
    gameListError: string;
    games: Game[];
}

const initialState: GameState = {
    isRequesting: false,
    isGettingGames: false,
    error: '',
    gameListError: '',
    games: [],
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        newGameRequest: (state, action: PayloadAction<NewGameDTO>) => {
            state.isRequesting = true;
            state.error = '';
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
            state.isRequesting = false;
            state.error = action.payload;
            // TODO: notification or error message
        },
    },
});

export const { newGameRequest, getGamesList, getGamesSuccess, getGamesFailed } =
    gameSlice.actions;

export default gameSlice.reducer;
