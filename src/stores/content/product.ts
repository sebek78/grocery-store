import { ProductType } from '@shared/types';

export class Product {
    expirationDate: number;

    constructor(public id: number, public productType: keyof ProductType) {
        this.setProdukt(productType);
    }

    setProdukt(productType: keyof ProductType) {
        switch (productType) {
            case ProductType.Bakery:
                this.expirationDate = 2;
                break;
            case ProductType.Dairy:
                this.expirationDate = 3;
                break;
            case ProductType.DryGoods:
                this.expirationDate = 4;
                break;
            case ProductType.Frozen:
                this.expirationDate = -1; // never expires
                break;
            case ProductType.Produce:
                this.expirationDate = 1;
                break;
        }
    }
}
