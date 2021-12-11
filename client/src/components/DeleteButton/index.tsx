import React from 'react';
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

interface DeleteButtonProps {
    actionId: number;
    action: (id: number) => void;
}

const DeleteButton = ({ action, actionId }: DeleteButtonProps) => {
    return (
        <IconButton
            edge="end"
            aria-label="delete"
            color="error"
            onClick={() => action(actionId)}
        >
            <Delete />
        </IconButton>
    );
};

export default DeleteButton;
