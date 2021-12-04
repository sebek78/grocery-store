import { ProductType } from '@shared/types';

export class Product {
    expirationDate: number;
    isOnSale = false;
    onSalePrice: number;
    price: number;

    constructor(public id: number, public productType: keyof ProductType) {
        this.setProdukt(productType);
    }

    setProdukt(productType: keyof ProductType) {
        switch (productType) {
            case ProductType.Bakery:
                this.price = 4;
                this.onSalePrice = 3;
                this.expirationDate = 2;
                break;
            case ProductType.Dairy:
                this.price = 4;
                this.onSalePrice = 2;
                this.expirationDate = 3;
                break;
            case ProductType.DryGoods:
                this.price = 10;
                this.onSalePrice = 7;
                this.expirationDate = 4;
                break;
            case ProductType.Frozen:
                this.price = 7;
                this.onSalePrice = 5;
                this.expirationDate = -1; // never expires
                break;
            case ProductType.Produce:
                this.price = 3;
                this.onSalePrice = 2;
                this.expirationDate = 1;
                break;
        }
    }
}
