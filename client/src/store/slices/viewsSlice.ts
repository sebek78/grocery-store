import { AUTO_HIDE_DURATION } from '@constants';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SnackbarData } from '@sharedTypes';

interface ViewState {
    menuOpen: boolean;
    homepage: {
        loginDialogOpen: boolean;
        registerDialogOpen: boolean;
    };
    snackbar: {
        open: boolean;
        autoHideDuration: number | null;
    };
    snackbarMessage: SnackbarData;
    confirmDialog: {
        open: boolean;
    };
}

const initialState: ViewState = {
    menuOpen: false,
    homepage: {
        loginDialogOpen: false,
        registerDialogOpen: false,
    },
    snackbar: {
        open: false,
        autoHideDuration: AUTO_HIDE_DURATION,
    },
    snackbarMessage: {
        message: '',
        severity: 'error',
    },
    confirmDialog: {
        open: false,
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
        closeSnackbar: (state) => {
            state.snackbar.open = false;
            state.snackbarMessage.message = '';
            state.snackbarMessage.severity = 'info';
        },
        showSnackbar: (state, action: PayloadAction<SnackbarData>) => {
            state.snackbar.open = true;
            state.snackbarMessage.message = action.payload.message;
            state.snackbarMessage.severity = action.payload.severity;
            state.snackbar.autoHideDuration =
                action.payload.autoHideDuration !== undefined
                    ? action.payload.autoHideDuration
                    : AUTO_HIDE_DURATION;
        },
        openConfirmDialog: (state, action: PayloadAction<boolean>) => {
            state.confirmDialog.open = action.payload;
        },
    },
});

export const {
    closeMenu,
    openMenu,
    openDialog,
    closeDialog,
    closeSnackbar,
    showSnackbar,
    openConfirmDialog,
} = viewsSlice.actions;
export default viewsSlice.reducer;
