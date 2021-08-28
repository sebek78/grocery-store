import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    name: string;
    authenticated: boolean;
    isRequesting: boolean;
}

const initialState: UserState = {
    name: '',
    authenticated: false,
    isRequesting: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsRequesting: (state) => {
            state.isRequesting = true;
        },
        setLogIn: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
            state.authenticated = true;
        },
    },
});

export const { setIsRequesting } = userSlice.actions;
export default userSlice.reducer;
