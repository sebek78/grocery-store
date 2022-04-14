import React from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    Theme,
} from '@mui/material';
import { useAppDispatch } from '@store';
import { openConfirmDialog } from '@viewsSlice';
import { ColorButton } from '@components';
import { SnackbarSeverity } from 'src/sharedTypes';

export interface ConfirmDialogProps {
    open: boolean;
    title: string;
    text: string;
    actionName: string;
    severity: SnackbarSeverity;
    action: () => void;
}

const ConfirmDialog = ({
    open,
    title,
    text,
    actionName,
    severity,
    action,
}: ConfirmDialogProps) => {
    const dispatch = useAppDispatch();

    const handleClose = () => {
        dispatch(openConfirmDialog(false));
    };

    return (
        <Dialog open={open}>
            <DialogTitle
                sx={{
                    backgroundColor: (theme: Theme) =>
                        theme.palette[severity].light,
                    color: (theme: Theme) =>
                        theme.palette[severity].contrastText,
                }}
            >
                {title}
            </DialogTitle>
            <DialogContent dividers>{text}</DialogContent>
            <DialogActions>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    <ColorButton
                        btnColor="info"
                        autoFocus
                        onClick={handleClose}
                    >
                        Anuluj
                    </ColorButton>
                    <ColorButton btnColor={severity} onClick={action}>
                        {actionName}
                    </ColorButton>
                </Grid>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;
