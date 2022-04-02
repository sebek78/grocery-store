import { ICustomer, ProductType } from '@sharedTypes';
import React from 'react';
import styled from 'styled-components';
import { theme } from '@utils';
import CustomerCard from './components/CustomerCard';
import HiddenCustomer from './components/HiddenCustomer';
import CustomerCoupons from './components/CustomerCoupons';

interface CustomerProps {
    customer: ICustomer;
}

const CustomerLabel = styled.div`
    color: ${theme.palette.text.primary};
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`;

const ShoppingList = styled.ul`
    list-style-type: none;
    padding-left: 0;
    margin: 8px 0;
`;

function Customer({ customer }: CustomerProps) {
    return (
        <CustomerCard isHidden={customer.hidden}>
            {customer.hidden && <HiddenCustomer />}
            {!customer.hidden && (
                <>
                    <CustomerLabel>{customer.name}</CustomerLabel>
                    <CustomerCoupons coupons={customer.coupons} />
                    <ShoppingList>
                        {customer.needs.map((productType) => (
                            <li>
                                {
                                    ProductType[
                                        productType as keyof typeof ProductType
                                    ]
                                }
                            </li>
                        ))}
                    </ShoppingList>
                </>
            )}
        </CustomerCard>
    );
}

export default Customer;
