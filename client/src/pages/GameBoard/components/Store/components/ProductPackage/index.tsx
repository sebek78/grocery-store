import { Product } from '@sharedTypes';
import React from 'react';

interface ProductProps {
    product: Product;
}

const ProductPackage = ({ product }: ProductProps) => {
    return (
        <li key={product.id}>
            {product.productType}, ED: {product.expirationDate}
        </li>
    );
};

export default ProductPackage;
