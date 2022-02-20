import React from 'react';
import { Product, ProductType } from '@sharedTypes';
import bakery from '@assets/bakery.png';
import dairy from '@assets/dairy.png';
import dryGoods from '@assets/dry-goods.png';
import frozen from '@assets/frozen.png';
import produce from '@assets/produce.png';
import { setProductColor } from '../../helpers';
import { ProductCard, ProductImg, ProductDate } from '../Styled';

interface ProductProps {
    product: Product;
}

function getProductImage(productType: ProductType) {
    switch (productType) {
        case ProductType.Bakery:
            return bakery;
        case ProductType.Dairy:
            return dairy;
        case ProductType.DryGoods:
            return dryGoods;
        case ProductType.Frozen:
            return frozen;
        case ProductType.Produce:
            return produce;
    }
}

const ProductPackage = ({ product }: ProductProps) => {
    return (
        <ProductCard
            key={product.id}
            color={setProductColor(product.productType)}
        >
            <ProductImg src={getProductImage(product.productType)} alt="" />
            {product.expirationDate > 0 && (
                <ProductDate color={setProductColor(product.productType)}>
                    {product.expirationDate}
                </ProductDate>
            )}
        </ProductCard>
    );
};

export default ProductPackage;
