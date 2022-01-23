import { ProductType } from '@shared/types';

export interface Price {
    isOnSale: boolean;
    onSalePrice: number;
    price: number;
}

const initialPrice: Price = {
    price: 0,
    onSalePrice: 0,
    isOnSale: false,
};

type PricesType = {
    [key in ProductType]?: Price;
};

export class Prices {
    prices: PricesType = {};

    constructor() {
        for (const key of Object.keys(ProductType)) {
            const newPrice: Price = this.setPrice(ProductType[key]);
            this.prices[key] = newPrice;
        }
    }

    private setPrice(productType: keyof ProductType) {
        const newPrice = { ...initialPrice };
        switch (productType) {
            case ProductType.Bakery:
                newPrice.price = 4;
                newPrice.onSalePrice = 3;
                break;
            case ProductType.Dairy:
                newPrice.price = 4;
                newPrice.onSalePrice = 2;
                break;
            case ProductType.DryGoods:
                newPrice.price = 10;
                newPrice.onSalePrice = 7;
                break;
            case ProductType.Frozen:
                newPrice.price = 7;
                newPrice.onSalePrice = 5;
                break;
            case ProductType.Produce:
                newPrice.price = 3;
                newPrice.onSalePrice = 2;
                break;
        }
        return newPrice;
    }
}
