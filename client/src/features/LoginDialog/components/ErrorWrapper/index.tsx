import React from 'react';
import { DialogContentText } from '@mui/material';
import { UserLoginDto } from 'src/sharedTypes';
import { DeepMap, FieldError } from 'react-hook-form';

type ErrorWrapperProps = {
    errors: DeepMap<UserLoginDto, FieldError>;
    apiError: string;
};

const ErrorWrapper = ({ errors, apiError }: ErrorWrapperProps) => {
    return (
        <>
            {apiError.length === 0 && Object.keys(errors).length === 0 && (
                <DialogContentText>Logowanie do serwisu.</DialogContentText>
            )}
            {apiError.length > 0 && (
                <DialogContentText sx={{ color: 'error.main' }}>
                    {apiError}
                </DialogContentText>
            )}
            {errors.username && (
                <DialogContentText sx={{ color: 'error.main' }}>
                    {errors.username.message}
                </DialogContentText>
            )}
            {errors.password && (
                <DialogContentText sx={{ color: 'error.main' }}>
                    {errors.password.message}
                </DialogContentText>
            )}
        </>
    );
};

export default ErrorWrapper;
