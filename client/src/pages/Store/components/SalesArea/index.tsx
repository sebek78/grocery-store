import { Product, ProductType } from '@sharedTypes';
import { theme } from '@utils';
import React from 'react';
import styled from 'styled-components';

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
    padding: 8px 16px 8px;
    ${theme.breakpoints.up('sm')} {
        max-width: max-content;
        margin: 0 auto;
    }
`;

export const SalesAreaLabel = styled.div`
    font-size: ${theme.typography.h4.fontSize};
    padding-bottom: 8px;
    text-align: center;
    color: ${(props) =>
        props.color ? props.color : theme.palette.text.primary};
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
            <SalesAreaLabel color={theme.palette.text.secondary}>
                Pojemność {countProducts(props.salesArea)}/15
            </SalesAreaLabel>
            {props.children}
        </StyledDiv>
    );
}

export default SalesArea;
