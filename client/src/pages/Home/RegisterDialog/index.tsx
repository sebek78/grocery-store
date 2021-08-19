import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions,
} from '@material-ui/core';
import { ColorButton } from '@components';

type RegisterDialogProps = {
    open: boolean;
    handleClose: (dialog: string) => void;
};

const RegisterDialog = ({ open, handleClose }: RegisterDialogProps) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
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
                <ColorButton
                    onClick={() => handleClose('register')}
                    btnColor="success"
                >
                    Anuluj
                </ColorButton>
                <ColorButton
                    onClick={() => handleClose('register')}
                    btnColor="primary"
                >
                    Zarejestruj
                </ColorButton>
            </DialogActions>
        </Dialog>
    );
};

export default RegisterDialog;
