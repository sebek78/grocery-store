import React from 'react';
import { useAppSelector, useAppDispatch } from '@store';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions,
} from '@material-ui/core';
import { ColorButton } from '@components';
import { closeDialog } from '@viewsSlice';

const RegisterDialog = () => {
    const dispatch = useAppDispatch();
    const open = useAppSelector(
        ({ views }) => views.homepage.registerDialogOpen
    );
    const handleCloseDialog = () => dispatch(closeDialog('register'));

    return (
        <Dialog
            open={open}
            onClose={handleCloseDialog}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Rejestracja</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Hasło musi mieć 8 znaków lub więcej.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="login"
                    label="Login"
                    type="text"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    id="password"
                    label="Hasło"
                    type="password"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    id="password2"
                    label="Powtórz hasło"
                    type="password"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <ColorButton onClick={handleCloseDialog} btnColor="success">
                    Anuluj
                </ColorButton>
                <ColorButton onClick={handleCloseDialog} btnColor="primary">
                    Zarejestruj
                </ColorButton>
            </DialogActions>
        </Dialog>
    );
};

export default RegisterDialog;
