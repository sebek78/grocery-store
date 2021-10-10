import React from 'react';
import { DialogContentText } from '@material-ui/core';
import { UserLoginDto } from '@sharedTypes';
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
                <DialogContentText>{apiError}</DialogContentText>
            )}
            {errors.username && (
                <DialogContentText>{errors.username.message}</DialogContentText>
            )}
            {errors.password && (
                <DialogContentText>{errors.password.message}</DialogContentText>
            )}
        </>
    );
};

export default ErrorWrapper;
