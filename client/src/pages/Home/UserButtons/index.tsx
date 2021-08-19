import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from '@utils';
import { Button, Grid } from '@material-ui/core';
import { ColorButton } from '@components';

type UserButtonsProps = {
    handleDialogOpen: (dialog: string) => void;
};

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

const UserButtons = ({ handleDialogOpen }: UserButtonsProps) => {
    const classes = useStyles();

    return (
        <Grid item className={classes.userButtons}>
            <Button
                className={classes.registerButton}
                onClick={() => handleDialogOpen('register')}
            >
                Rejestracja
            </Button>
            <ColorButton
                btnColor="primary"
                onClick={() => handleDialogOpen('login')}
            >
                Zaloguj
            </ColorButton>
        </Grid>
    );
};
export default UserButtons;
