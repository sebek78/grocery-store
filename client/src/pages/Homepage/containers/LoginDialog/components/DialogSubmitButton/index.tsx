import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, DialogActions } from '@material-ui/core';
import { ColorButton } from '@components';
import { theme } from '@utils';

type DialogSubmitButtonProps = {
    isRequesting: boolean;
};

const useStyles = makeStyles({
    wrapper: {
        position: 'relative',
        paddingRight: 16,
    },
    buttonProgress: {
        color: theme.palette.warning.main,
        position: 'absolute',
        top: '50%',
        right: 56,
        marginTop: -16,
        marginLeft: -16,
    },
});

const DialogSubmitButton = ({ isRequesting }: DialogSubmitButtonProps) => {
    const classes = useStyles();

    return (
        <DialogActions className={classes.wrapper}>
            <ColorButton
                type="submit"
                btnColor="primary"
                disabled={isRequesting}
            >
                Zaloguj
            </ColorButton>
            {isRequesting && (
                <CircularProgress
                    size={32}
                    className={classes.buttonProgress}
                />
            )}
        </DialogActions>
    );
};

export default DialogSubmitButton;
