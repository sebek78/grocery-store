import React from 'react';
import { useAppSelector } from '@store';
import { Snackbar } from '@components';

const SnackbarProvider = () => {
    const { open, autoHideDuration } = useAppSelector(
        ({ views }) => views.snackbar
    );
    const { message, severity } = useAppSelector(
        ({ views }) => views.snackbarMessage
    );

    return (
        <Snackbar
            open={open}
            message={message}
            severity={severity}
            autoHideDuration={autoHideDuration}
        />
    );
};

export default SnackbarProvider;
