import { Product, ProductType } from '@sharedTypes';
import { theme } from '@utils';
import React from 'react';
import styled from 'styled-components';
import { StoreLabel } from '../StoreHeader';

type RackData = {
    productName: ProductType;
    price: {
        price: number;
        onSalePrice: number;
        isOnSale: boolean;
    };
    products: Product[];
};

interface SalesAreaProps {
    salesArea: RackData[];
    children?: React.ReactNode;
}

const StyledDiv = styled.div`
    border: 2px solid ${theme.palette.primary.dark};
    border-radius: 16px;
    padding: 16px;
`;

function countProducts(salesArea: RackData[]) {
    return salesArea.reduce(
        (sum: number, rackData: RackData): number =>
            sum + rackData.products.length,
        0
    );
}

function SalesArea(props: SalesAreaProps) {
    return (
        <StyledDiv>
            <StoreLabel color={theme.palette.text.secondary}>
                Pojemność {countProducts(props.salesArea)}/15
            </StoreLabel>
            {props.children}
        </StyledDiv>
    );
}

export default SalesArea;
