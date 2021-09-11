import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from '@utils';
import { Button, Grid } from '@material-ui/core';
import { ColorButton } from '@components';
import { openDialog } from '../../../../store/slices/viewsSlice';
import { useAppDispatch, useAppSelector } from '@store';
import { userLogoutRequest } from '@userSlice';

const useStyles = makeStyles({
    root: {
        backgroundColor: theme.palette.success.main,
        maxWidth: '100vw',
    },
    userButtons: {
        margin: '0 auto',
        [theme.breakpoints.up('sm')]: {
            margin: 0,
        },
    },
    registerButton: {
        color: '#FFF',
        marginRight: theme.spacing(2),
    },
});

const UserButtons = () => {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const authenticated = useAppSelector(({ user }) => user.authenticated);

    return (
        <Grid item className={classes.userButtons}>
            {authenticated ? (
                <>
                    <Button
                        className={classes.registerButton}
                        onClick={() => dispatch(userLogoutRequest())}
                    >
                        Wyloguj
                    </Button>
                </>
            ) : (
                <>
                    <Button
                        className={classes.registerButton}
                        onClick={() => dispatch(openDialog('register'))}
                    >
                        Rejestracja
                    </Button>
                    <ColorButton
                        btnColor="primary"
                        onClick={() => dispatch(openDialog('login'))}
                    >
                        Zaloguj
                    </ColorButton>
                </>
            )}
        </Grid>
    );
};
export default UserButtons;
