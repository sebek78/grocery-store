import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegisterUserDto, UserLoginDto } from '@sharedTypes';

interface UserState {
    username: string;
    authenticated: boolean;
    isRequesting: boolean;
    lastUpdateTime: number;
    pageReloaded: boolean;
    error: string;
}

const initialState: UserState = {
    username: '',
    authenticated: false,
    isRequesting: false,
    lastUpdateTime: 0,
    pageReloaded: true,
    error: '',
};

interface UserAuthSuccess {
    username: string;
}

function setInitialState() {
    const user = localStorage.getItem('gs');
    if (!user) return initialState;

    return {
        ...initialState,
        username: user,
        authenticated: true,
    };
}

export const userSlice = createSlice({
    name: 'user',
    initialState: setInitialState(),
    reducers: {
        userLoginRequest: (state, action: PayloadAction<UserLoginDto>) => {
            state.isRequesting = true;
            state.error = '';
        },
        userLoginSuccess: (state, action: PayloadAction<UserAuthSuccess>) => {
            const lastUpdateTime = Date.now();
            state.username = action.payload.username;
            state.authenticated = true;
            state.isRequesting = false;
            state.error = '';
            state.lastUpdateTime = lastUpdateTime;
            state.pageReloaded = false;
            localStorage.setItem('gs', `${action.payload.username}`);
        },
        userLoginFailed: (state, action: PayloadAction<string>) => {
            state.isRequesting = false;
            state.error = action.payload;
            state.lastUpdateTime = 0;
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
            state.lastUpdateTime = 0;
            localStorage.removeItem('gs');
        },
        userLogoutFailed: (state, action: PayloadAction<string>) => {
            state.authenticated = false;
            state.isRequesting = false;
            state.error = action.payload;
            state.lastUpdateTime = 0;
            localStorage.removeItem('gs');
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
        unauthorized: (state) => {
            state.username = '';
            state.authenticated = false;
            state.isRequesting = false;
            state.error = '';
            state.lastUpdateTime = 0;
            localStorage.removeItem('gs');
        },
        requestRefreshToken: () => {},
        refreshTokenSuccess: (state) => {
            const lastUpdateTime = Date.now();
            state.lastUpdateTime = lastUpdateTime;
            state.pageReloaded = false;
        },
        refreshTokenFailed: () => {},
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
    unauthorized,
    requestRefreshToken,
    refreshTokenSuccess,
    refreshTokenFailed,
} = userSlice.actions;

export default userSlice.reducer;
