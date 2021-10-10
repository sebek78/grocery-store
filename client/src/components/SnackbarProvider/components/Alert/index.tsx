import React from 'react';
import styled from 'styled-components';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

const Alert = (props: AlertProps) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const StyledAlert = styled(Alert)`
    & {
        min-width: 280px;

        color: ${(props) =>
            props.severity === 'success' || props.severity === 'warning'
                ? 'black'
                : 'white'};
    }
`;

export default StyledAlert;
