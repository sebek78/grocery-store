import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DialogActions } from '@material-ui/core';
import { ProgressButton } from '@components';
import { theme } from '@utils';

type DialogSubmitButtonProps = {
    isRequesting: boolean;
    label: string;
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

const DialogSubmitButton = ({
    isRequesting,
    label,
}: DialogSubmitButtonProps) => {
    const classes = useStyles();

    return (
        <DialogActions className={classes.wrapper}>
            <ProgressButton
                type="submit"
                isRequesting={isRequesting}
                label={label}
            />
        </DialogActions>
    );
};

export default DialogSubmitButton;
