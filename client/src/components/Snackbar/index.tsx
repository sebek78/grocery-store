import React from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { Alert, Snackbar as MuiSnackbar, useMediaQuery } from '@mui/material';
import {
    Check as CheckIcon,
    ErrorOutline as ErrorOutlineIcon,
} from '@mui/icons-material';
import { closeSnackbar } from '@viewsSlice';
import { SnackbarSeverity } from 'src/sharedTypes';
import { APP_BAR_HEIGHT } from '@constants';

type ToastProps = {
    open: boolean;
    message: string;
    severity: SnackbarSeverity;
    autoHideDuration: number | null;
};

const Snackbar = ({
    open,
    message,
    severity,
    autoHideDuration,
}: ToastProps) => {
    const dispatch = useDispatch();
    const theme = useTheme();

    const handleClose = () => {
        dispatch(closeSnackbar());
    };

    return (
        <MuiSnackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={handleClose}
            key={message}
            message={message}
            sx={{
                top: {
                    xs: 80,
                    sm: APP_BAR_HEIGHT / 2 - 24,
                },
            }}
        >
            <Alert
                onClose={handleClose}
                severity={severity}
                iconMapping={{
                    success: <CheckIcon fontSize="inherit" />,
                    error: <ErrorOutlineIcon fontSize="inherit" />,
                    info: <></>,
                }}
                variant="filled"
            >
                {message}
            </Alert>
        </MuiSnackbar>
    );
};

export default Snackbar;
