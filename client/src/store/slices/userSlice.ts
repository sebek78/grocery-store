import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

interface UserLoginData {
    username: string;
    password: string;
}

interface UserLoginSuccess {
    username: string;
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLoginRequest: (state, action: PayloadAction<UserLoginData>) => {
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
    },
});

export const { userLoginRequest, userLoginSuccess, userLoginFailed } =
    userSlice.actions;
export default userSlice.reducer;
