import { ProductType } from '@shared/types';
import { Product } from './product';

export class Store {
    store: string;
    stock_room: string;

    constructor(public game_id: number) {
        this.createFirstProducts();
    }

    createFirstProducts() {
        const store: Product[] = [];
        let productId = 0;

        for (const productType in ProductType) {
            for (let i = 0; i < 3; i++) {
                const product = new Product(
                    productId,
                    ProductType[productType],
                );
                productId += 1;
                store.push(product);
            }
        }
        this.store = JSON.stringify(store);
        this.stock_room = JSON.stringify([]);
    }
}
