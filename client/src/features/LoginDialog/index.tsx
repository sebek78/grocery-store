import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppSelector, useAppDispatch } from '@store';
import { userLoginRequest } from '@userSlice';
import { Dialog, DialogTitle, DialogContent, Grid } from '@material-ui/core';
import { CloseIconButton, TextInput } from '@components';
import { UserLoginDto } from '@sharedTypes';
import { loginSchema } from './loginSchema';
import DialogSubmitButton from './components/DialogSubmitButton';
import { closeDialog } from '@viewsSlice';
import ErrorWrapper from './components/ErrorWrapper';

const LoginDialog = () => {
    const dispatch = useAppDispatch();
    const isRequesting = useAppSelector(({ user }) => user.isRequesting);
    const apiError = useAppSelector(({ user }) => user.error);
    const open = useAppSelector(({ views }) => views.homepage.loginDialogOpen);

    const handleCloseDialog = () => dispatch(closeDialog('login'));

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<UserLoginDto>({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit: SubmitHandler<UserLoginDto> = ({ username, password }) => {
        dispatch(
            userLoginRequest({
                username,
                password,
            })
        );
    };

    return (
        <Dialog
            open={open}
            onClose={handleCloseDialog}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item>Logowanie</Grid>
                    <CloseIconButton handleClose={handleCloseDialog} />
                </Grid>
            </DialogTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogContent>
                    <ErrorWrapper errors={errors} apiError={apiError} />
                    <TextInput
                        label="Login"
                        name="username"
                        control={control}
                        defaultValue=""
                    />
                    <TextInput
                        label="Has??o"
                        name="password"
                        type="password"
                        control={control}
                        defaultValue=""
                    />
                </DialogContent>
                <DialogSubmitButton
                    isRequesting={isRequesting}
                    label="Zaloguj"
                />
            </form>
        </Dialog>
    );
};

export default LoginDialog;
