import React from 'react';
import { Price, Product, ProductType } from '@sharedTypes';
import { setProductColor } from '../../helpers';
import {
    StyledRack,
    RackLabel,
    ProductName,
    PriceBox,
    OnSaleLabel,
    PriceLabel,
    OnSalePriceLabel,
    ProductList,
} from '../Styled';

import ProductPackage from '../ProductPackage';

interface RackProps {
    productName: string;
    price: Price;
    products: Product[];
}

const Rack = ({ productName, price, products }: RackProps) => {
    return (
        <StyledRack>
            <RackLabel color={setProductColor(productName as ProductType)}>
                <ProductName>{productName}</ProductName>
                <PriceBox>
                    {price.isOnSale && <OnSaleLabel>Wyprzedaż</OnSaleLabel>}
                    <PriceLabel>{`Cena:`}</PriceLabel>
                    {!price.isOnSale && <PriceLabel>{price.price}</PriceLabel>}
                    {price.isOnSale && (
                        <OnSalePriceLabel>{price.price}</OnSalePriceLabel>
                    )}
                    {price.isOnSale && (
                        <PriceLabel>{price.onSalePrice}</PriceLabel>
                    )}
                </PriceBox>
            </RackLabel>
            <ProductList color={setProductColor(productName as ProductType)}>
                {products.map((product) => (
                    <ProductPackage key={product.id} product={product} />
                ))}
            </ProductList>
        </StyledRack>
    );
};

export default Rack;
