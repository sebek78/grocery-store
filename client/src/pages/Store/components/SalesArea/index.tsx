import { Product, ProductType } from 'src/sharedTypes';
import { theme } from '@utils';
import React from 'react';
import { SectionLabel, StoreSection } from '../Styled';

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

function countProducts(salesArea: RackData[]) {
    return salesArea.reduce(
        (sum: number, rackData: RackData): number =>
            sum + rackData.products.length,
        0
    );
}

function SalesArea(props: SalesAreaProps) {
    return (
        <StoreSection>
            <SectionLabel color={theme.palette.text.secondary}>
                Pojemność {countProducts(props.salesArea)}/15
            </SectionLabel>
            {props.children}
        </StoreSection>
    );
}

export default SalesArea;
