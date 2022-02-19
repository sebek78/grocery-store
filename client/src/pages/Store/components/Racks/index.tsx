import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledUl = styled.ul`
    margin: 0;
    padding: 0;
`;

function Racks({ children }: PropsWithChildren<{}>) {
    return <StyledUl>{children}</StyledUl>;
}

export default Racks;
