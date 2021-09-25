import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppSelector, useAppDispatch } from '@store';
import { userLoginRequest } from '@userSlice';
import { Dialog, DialogTitle, DialogContent, Grid } from '@material-ui/core';
import { CloseIconButton } from '@components';
import { UserLoginDto } from '@sharedTypes';
import { loginSchema } from './loginSchema';
import DialogSubmitButton from '../LoginDialog/components/DialogSubmitButton';
import { closeDialog } from '@viewsSlice';
import ErrorWrapper from './components/ErrorWrapper';
import TextInput from './components/TextInput';

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
                    />
                    <TextInput
                        label="Hasło"
                        name="password"
                        type="password"
                        control={control}
                    />
                </DialogContent>
                <DialogSubmitButton isRequesting={isRequesting} />
            </form>
        </Dialog>
    );
};

export default LoginDialog;
