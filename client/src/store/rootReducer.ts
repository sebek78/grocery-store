import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import viewsReducer from './slices/viewsSlice';

const rootReducer = combineReducers({
    user: userReducer,
    views: viewsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
