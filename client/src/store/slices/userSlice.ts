import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegisterUserDto, UserLoginDto } from '@sharedTypes';

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

interface UserAuthSuccess {
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
        userLoginSuccess: (state, action: PayloadAction<UserAuthSuccess>) => {
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
        registerUserRequest: (
            state,
            action: PayloadAction<RegisterUserDto>
        ) => {
            state.isRequesting = true;
            state.error = '';
        },
        registerUserSuccess: (
            state,
            action: PayloadAction<UserAuthSuccess>
        ) => {
            // TODO: notification, action.payload.username
            state.isRequesting = false;
            state.error = '';
        },
        registerUserFailed: (state, action: PayloadAction<string>) => {
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
    registerUserRequest,
    registerUserSuccess,
    registerUserFailed,
} = userSlice.actions;

export default userSlice.reducer;
