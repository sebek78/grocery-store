import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppSelector, useAppDispatch } from '@store';
import { Dialog, DialogTitle, DialogContent, Grid } from '@material-ui/core';
import { CloseIconButton } from '@components';
import { closeDialog } from '@viewsSlice';
import { RegisterUserDto } from '../../../../utils/sharedTypes';
import { registerUserRequest } from '@userSlice';
import DialogSubmitButton from '../LoginDialog/components/DialogSubmitButton';
import { registerSchema } from './registerSchema';
import ErrorWrapper from './components/ErrorWrapper';
import TextInput from './components/TextInput';

const RegisterDialog = () => {
    const dispatch = useAppDispatch();
    const isRequesting = useAppSelector(({ user }) => user.isRequesting);
    const apiError = useAppSelector(({ user }) => user.error);
    const open = useAppSelector(
        ({ views }) => views.homepage.registerDialogOpen
    );

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterUserDto>({
        resolver: yupResolver(registerSchema),
    });

    const handleCloseDialog = () => dispatch(closeDialog('register'));

    const onSubmit: SubmitHandler<RegisterUserDto> = ({
        username,
        password,
        password2,
    }) => {
        dispatch(
            registerUserRequest({
                username,
                password,
                password2,
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
                    <Grid item>Rejestracja</Grid>
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
                    <TextInput
                        label="Powtórz hasło"
                        name="password2"
                        type="password"
                        control={control}
                    />
                </DialogContent>
                <DialogSubmitButton isRequesting={isRequesting} />
            </form>
        </Dialog>
    );
};

export default RegisterDialog;
