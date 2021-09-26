import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Snackbar as MUI_Snackbar } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ErrorOutline from '@material-ui/icons/ErrorOutline';
import { closeSnackbar } from '@viewsSlice';
import { SnackbarSeverity } from '@sharedTypes';
import { theme } from '@utils';
import StyledAlert from '../Alert';

type ToastProps = {
    open: boolean;
    message: string;
    severity: SnackbarSeverity;
};

const StyledSnackbar = styled(MUI_Snackbar)`
    & {
        top: ${theme.spacing(12)}px;

        ${theme.breakpoints.down('xs')} {
            top: ${theme.spacing(20)}px;
        }
    }
`;

const Snackbar = ({ open, message, severity }: ToastProps) => {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(closeSnackbar());
    };

    return (
        <StyledSnackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
            key={message}
        >
            <StyledAlert
                onClose={handleClose}
                severity={severity}
                iconMapping={{
                    success: <CheckIcon fontSize="inherit" />,
                    info: <></>,
                }}
                variant="filled"
            >
                {message}
            </StyledAlert>
        </StyledSnackbar>
    );
};

export default Snackbar;
