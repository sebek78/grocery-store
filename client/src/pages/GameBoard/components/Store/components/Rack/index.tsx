import { Price, ProductType, Product, PricesType } from '@sharedTypes';
import React from 'react';
import ProductPackage from '../ProductPackage';

interface RackProps {
    productName: string;
    price: Price;
    products: Product[];
}

const Rack = ({ productName, price, products }: RackProps) => {
    return (
        <li>
            <div>{productName}</div>
            {price.isOnSale ? (
                <>
                    <div>Wyprzedaż: {price.isOnSale.toString()}</div>
                    <div>
                        {`Cena: `}
                        <span style={{ textDecoration: 'line-through' }}>
                            {price.price}
                        </span>
                        <span>{` ${price.onSalePrice}`}</span>
                    </div>
                </>
            ) : (
                <div>Cena: {price.price}</div>
            )}
            <ul>
                {products.map((product) => (
                    <ProductPackage key={product.id} product={product} />
                ))}
            </ul>
        </li>
    );
};

export default Rack;
