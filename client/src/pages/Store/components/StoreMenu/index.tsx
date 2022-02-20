import React from 'react';
import styled from 'styled-components';
import { ColorButton } from '@components';

const StyledDiv = styled.div`
    padding: 8px;
`;

interface StoreMenuProps {
    phase: number;
}

function StoreMenu({ phase }: StoreMenuProps) {
    const setLabel = (phase: number): string => {
        switch (phase) {
            case 0:
                return 'Dostawy';
            default:
                return 'Dalej';
        }
    };

    const handleNext = (phase: number): void => {
        switch (phase) {
            case 0:
                console.log('nextPhase: Delivery');
                break;
            default:
                console.log('nextPhase: ?');
        }
    };

    return (
        <StyledDiv>
            <ColorButton btnColor="primary" onClick={() => handleNext(phase)}>
                {setLabel(phase)}
            </ColorButton>
        </StyledDiv>
    );
}

export default StoreMenu;
