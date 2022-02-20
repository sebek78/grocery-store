import { ProductType } from '@sharedTypes';

export function setProductColor(productType: ProductType) {
    switch (productType) {
        case ProductType.Bakery:
            return 'sandybrown';
        case ProductType.Dairy:
            return 'cyan';
        case ProductType.DryGoods:
            return 'slategray';
        case ProductType.Frozen:
            return 'dodgerblue';
        case ProductType.Produce:
            return 'tomato';
        default:
            return 'red';
    }
}
