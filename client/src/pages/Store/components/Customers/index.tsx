import { ICustomer } from '@sharedTypes';
import React from 'react';
import { Customer } from '@features';
import { SectionLabel, StoreSection } from '../Styled';

interface CustomersProps {
    customers?: ICustomer[];
}

function Customers({ customers }: CustomersProps) {
    if (!customers) return null;

    return (
        <StoreSection>
            <SectionLabel>{`Klienci ${customers.length}/5`}</SectionLabel>
            {customers.map((customer: ICustomer) => (
                <Customer key={customer.name} customer={customer} />
            ))}
        </StoreSection>
    );
}

export default Customers;
