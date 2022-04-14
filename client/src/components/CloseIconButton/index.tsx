import React from 'react';
import { IconButton } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import styled from 'styled-components';

type CloseIconButtonProps = {
    handleClose: (target: string) => void;
};

const StyledIconButton = styled(IconButton)`
    transform: translateX(12px);
`;

const CloseIconButton = ({ handleClose }: CloseIconButtonProps) => (
    <StyledIconButton color="primary" onClick={() => handleClose('login')}>
        <CloseRoundedIcon fontSize="large" />
    </StyledIconButton>
);

export default CloseIconButton;
