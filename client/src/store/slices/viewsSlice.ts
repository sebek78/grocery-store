import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ViewState {
    menuOpen: boolean;
    homepage: {
        loginDialogOpen: boolean;
        registerDialogOpen: boolean;
    };
}

const initialState: ViewState = {
    menuOpen: false,
    homepage: {
        loginDialogOpen: false,
        registerDialogOpen: false,
    },
};

export const viewsSlice = createSlice({
    name: 'views',
    initialState,
    reducers: {
        closeMenu: (state) => {
            state.menuOpen = false;
        },
        openMenu: (state) => {
            state.menuOpen = true;
        },
        openDialog: (state, action: PayloadAction<string>) => {
            if (action.payload === 'login') {
                state.homepage.loginDialogOpen = true;
            }
            if (action.payload === 'register') {
                state.homepage.registerDialogOpen = true;
            }
        },
        closeDialog: (state, action: PayloadAction<string>) => {
            if (action.payload === 'login') {
                state.homepage.loginDialogOpen = false;
            }
            if (action.payload === 'register') {
                state.homepage.registerDialogOpen = false;
            }
        },
    },
});

export const { closeMenu, openMenu, openDialog, closeDialog } =
    viewsSlice.actions;
export default viewsSlice.reducer;
