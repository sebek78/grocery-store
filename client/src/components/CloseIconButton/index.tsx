import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

type CloseIconButtonProps = {
    handleClose: (target: string) => void;
};

const useStyles = makeStyles({
    closeIcon: {
        transform: 'translateX(12px)',
    },
});

const CloseIconButton = ({ handleClose }: CloseIconButtonProps) => {
    const classes = useStyles();

    return (
        <IconButton
            color="primary"
            className={classes.closeIcon}
            onClick={() => handleClose('login')}
        >
            <CloseRoundedIcon fontSize="large" />
        </IconButton>
    );
};

export default CloseIconButton;
