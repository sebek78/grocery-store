import React from 'react';
import { ColorButton } from '@components';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from '@utils';

interface ProgressButtonProps {
    isRequesting: boolean;
    label: string;
    onClick?: Function;
    type?: 'submit' | 'button';
}

const useStyles = makeStyles({
    wrapper: {
        width: 'max-content',
        position: 'relative',
    },
    buttonProgress: {
        color: theme.palette.warning.main,
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -16,
        marginLeft: -16,
    },
});

const ProgressButton = ({
    onClick,
    isRequesting,
    label,
    type = 'button',
}: ProgressButtonProps) => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <ColorButton
                type={type}
                btnColor="primary"
                disabled={isRequesting}
                onClick={onClick}
            >
                {label}{' '}
            </ColorButton>
            {isRequesting && (
                <CircularProgress
                    size={32}
                    className={classes.buttonProgress}
                />
            )}
        </div>
    );
};

export default ProgressButton;
