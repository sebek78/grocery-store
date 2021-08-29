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

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLoginRequest: (state) => {
            state.isRequesting = true;
        },
        userLoginSuccess: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
            state.authenticated = true;
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
