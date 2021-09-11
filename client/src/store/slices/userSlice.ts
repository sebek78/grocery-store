import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserLoginDto } from '../../utils/sharedTypes';

interface UserState {
    username: string;
    authenticated: boolean;
    isRequesting: boolean;
    error: string;
}

const initialState: UserState = {
    username: '',
    authenticated: false,
    isRequesting: false,
    error: '',
};

interface UserLoginSuccess {
    username: string;
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLoginRequest: (state, action: PayloadAction<UserLoginDto>) => {
            state.isRequesting = true;
            state.error = '';
        },
        userLoginSuccess: (state, action: PayloadAction<UserLoginSuccess>) => {
            state.username = action.payload.username;
            state.authenticated = true;
            state.isRequesting = false;
            state.error = '';
        },
        userLoginFailed: (state, action: PayloadAction<string>) => {
            state.isRequesting = false;
            state.error = action.payload;
        },
        userLogoutRequest: (state) => {
            state.isRequesting = true;
            state.error = '';
        },
        userLogoutSuccess: (state) => {
            state.username = '';
            state.authenticated = false;
            state.isRequesting = false;
            state.error = '';
        },
        userLogoutFailed: (state, action: PayloadAction<string>) => {
            state.isRequesting = false;
            state.error = action.payload;
        },
    },
});

export const {
    userLoginRequest,
    userLoginSuccess,
    userLoginFailed,
    userLogoutRequest,
    userLogoutSuccess,
    userLogoutFailed,
} = userSlice.actions;

export default userSlice.reducer;
