import React from 'react';
import ColorButton from '../ColorButton/ColorButton';
import { Theme } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';

interface ProgressButtonProps {
    isRequesting: boolean;
    label: string;
    onClick?: Function;
    type?: 'submit' | 'button';
}

const StyledWrapper = styled.div`
    width: max-content;
    position: relative;
`;

const StyledProgress = styled(({ theme, ...props }) => (
    <CircularProgress
        {...props}
        sx={{
            color: (theme: Theme) => theme.palette.warning.main,
        }}
    />
))`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -16px;
    margin-left: -16px;
`;

const ProgressButton = ({
    onClick,
    isRequesting,
    label,
    type = 'button',
}: ProgressButtonProps) => (
    <StyledWrapper>
        <ColorButton
            type={type}
            btnColor="primary"
            disabled={isRequesting}
            onClick={onClick}
        >
            {label}{' '}
        </ColorButton>
        {isRequesting && <StyledProgress size={32} />}
    </StyledWrapper>
);

export default ProgressButton;
