import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import viewsReducer from './slices/viewsSlice';
import gameReducer from './slices/gameSlice';

const rootReducer = combineReducers({
    user: userReducer,
    views: viewsReducer,
    game: gameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
