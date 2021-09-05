import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RootState } from 'src/store/store';
import { useSelector, useDispatch } from 'react-redux';
import { userLoginRequest } from '../../../../store/slices/userSlice';
import { Dialog, DialogTitle, DialogContent, Grid } from '@material-ui/core';
import { CloseIconButton, TextInput } from '@components';
import { UserLoginDto } from '../../../../utils/sharedTypes';
import ErrorWrapper from './components/ErrorWrapper';
import { loginSchema } from './loginSchema';
import DialogSubmitButton from './components/DialogSubmitButton';
import { closeDialog } from '../../../../store/slices/viewsSlice';

const LoginDialog = () => {
    const dispatch = useDispatch();

    const isRequesting = useSelector(
        (state: RootState) => state.user.isRequesting
    );
    const apiError = useSelector((state: RootState) => state.user.error);
    const open = useSelector(
        (state: RootState) => state.views.homepage.loginDialogOpen
    );

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
                        control={control}
                    />
                </DialogContent>
                <DialogSubmitButton isRequesting={isRequesting} />
            </form>
        </Dialog>
    );
};

export default LoginDialog;
