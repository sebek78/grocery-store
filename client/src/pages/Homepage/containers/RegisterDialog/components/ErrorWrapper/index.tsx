import React from 'react';
import { DialogContentText } from '@material-ui/core';
import { RegisterUserDto } from '../../../../../../utils/sharedTypes';
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
                <DialogContentText>{apiError}</DialogContentText>
            )}
            {errors.username && (
                <DialogContentText>{errors.username.message}</DialogContentText>
            )}
            {errors.password && (
                <DialogContentText>{errors.password.message}</DialogContentText>
            )}
            {errors.password2 && (
                <DialogContentText>
                    {errors.password2.message}
                </DialogContentText>
            )}
        </>
    );
};

export default ErrorWrapper;
