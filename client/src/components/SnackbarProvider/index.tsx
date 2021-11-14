import React from 'react';
import { useAppSelector } from '@store';
import Snackbar from '../Snackbar';

const SnackbarProvider = () => {
    const { open } = useAppSelector(({ views }) => views.snackbar);
    const { message, severity } = useAppSelector(
        ({ views }) => views.snackbarMessage
    );

    return <Snackbar open={open} message={message} severity={severity} />;
};

export default SnackbarProvider;
