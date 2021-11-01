import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewGameDTO } from '@sharedTypes';

interface GameState {
    isRequesting: boolean;
    error: string;
}

const initialState: GameState = {
    isRequesting: false,
    error: '',
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        newGameRequest: (state, action: PayloadAction<NewGameDTO>) => {
            state.isRequesting = true;
            state.error = '';
        },
    },
});

export const { newGameRequest } = gameSlice.actions;

export default gameSlice.reducer;
