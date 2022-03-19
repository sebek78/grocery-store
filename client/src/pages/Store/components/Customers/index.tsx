import { Customer } from '@sharedTypes';
import React from 'react';
import { SectionLabel, StoreSection } from '../Styled';

interface CustomersProps {
    customers?: Customer[];
}

function Customers({ customers }: CustomersProps) {
    console.log(customers);
    return (
        <StoreSection>
            <SectionLabel>Klienci ?/5</SectionLabel>
        </StoreSection>
    );
}

export default Customers;
