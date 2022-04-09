import React from 'react';
import { DialogContentText } from '@mui/material';
import { RegisterUserDto } from 'src/sharedTypes';
import { DeepMap, FieldError } from 'react-hook-form';

type ErrorWrapperProps = {
    errors: DeepMap<RegisterUserDto, FieldError>;
    apiError: string;
};

const ErrorWrapper = ({ errors, apiError }: ErrorWrapperProps) => {
    return (
        <>
            {apiError.length === 0 && Object.keys(errors).length === 0 && (
                <DialogContentText>Rejestracja do serwisu.</DialogContentText>
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
            {errors.password2 && (
                <DialogContentText sx={{ color: 'error.main' }}>
                    {errors.password2.message}
                </DialogContentText>
            )}
        </>
    );
};

export default ErrorWrapper;
