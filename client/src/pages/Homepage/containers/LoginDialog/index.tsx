import React from 'react';
import { RootState } from 'src/store/store';
import { useSelector, useDispatch } from 'react-redux';
import { userLoginRequest } from '../../../../store/slices/userSlice';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions,
} from '@material-ui/core';
import { ColorButton } from '@components';

type LoginDialogProps = {
    open: boolean;
    handleClose: (dialog: string) => void;
};

const LoginDialog = ({ open, handleClose }: LoginDialogProps) => {
    // TODO: loader
    const isRequesting = useSelector(
        (state: RootState) => state.user.isRequesting
    );
    const error = useSelector((state: RootState) => state.user.error);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        // TODO: form
        dispatch(
            userLoginRequest({
                username: 'tester01',
                password: 'tester01',
            })
        );
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Logowanie</DialogTitle>
            <DialogContent>
                {/* TODO: error label component */}
                <DialogContentText>Logowanie do serwisu.</DialogContentText>
                {error.length > 0 && (
                    <DialogContentText>{error}</DialogContentText>
                )}
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
            </DialogContent>
            <DialogActions>
                <ColorButton
                    onClick={() => handleClose('login')}
                    btnColor="success"
                >
                    Anuluj
                </ColorButton>
                <ColorButton onClick={handleSubmit} btnColor="primary">
                    Zaloguj
                </ColorButton>
            </DialogActions>
        </Dialog>
    );
};

export default LoginDialog;