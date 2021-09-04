import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { RootState } from 'src/store/store';
import { useSelector, useDispatch } from 'react-redux';
import { userLoginRequest } from '../../../../store/slices/userSlice';
import {
    CircularProgress,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    Grid,
    TextField,
    DialogActions,
} from '@material-ui/core';
import { CloseIconButton, ColorButton } from '@components';
import { theme } from '@utils';

type LoginDialogProps = {
    open: boolean;
    handleClose: (dialog: string) => void;
};

const useStyles = makeStyles({
    wrapper: {
        position: 'relative',
        paddingRight: 16,
    },
    buttonProgress: {
        color: theme.palette.warning.main,
        position: 'absolute',
        top: '50%',
        right: 48,
        marginTop: -16,
        marginLeft: -16,
    },
});

const LoginDialog = ({ open, handleClose }: LoginDialogProps) => {
    const classes = useStyles();
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
            <DialogTitle id="form-dialog-title">
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item>Logowanie</Grid>
                    <CloseIconButton handleClose={handleClose} />
                </Grid>
            </DialogTitle>
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
            <DialogActions className={classes.wrapper}>
                <ColorButton
                    onClick={handleSubmit}
                    btnColor="primary"
                    disabled={isRequesting}
                >
                    Zaloguj
                </ColorButton>
                {isRequesting && (
                    <CircularProgress
                        size={32}
                        className={classes.buttonProgress}
                    />
                )}
            </DialogActions>
        </Dialog>
    );
};

export default LoginDialog;
