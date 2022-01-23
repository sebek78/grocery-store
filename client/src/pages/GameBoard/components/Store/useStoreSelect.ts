import { getGameDataRequest } from '@gameSlice';
import { useAppSelector, useAppDispatch } from '@store';
import { Price, ProductType } from '@sharedTypes';
import { useEffect } from 'react';
import { Store } from '@sharedTypes';

const initialPrice: Price = {
    price: 0,
    onSalePrice: 0,
    isOnSale: false,
};

function getPrice(store: Store | undefined, productTypeForPrice: ProductType) {
    if (!store) return initialPrice;

    const keyIndex = Object.values(ProductType).findIndex(
        (productType) => productTypeForPrice === productType
    );
    const key = Object.keys(ProductType)[keyIndex];

    return store.prices[key as ProductType];
}

const useStoreSelect = (gameId: number) => {
    const dispatch = useAppDispatch();
    const store = useAppSelector(({ game }) =>
        game.stores.find((store) => store.gameId === gameId)
    );

    useEffect(() => {
        if (!store) {
            dispatch(getGameDataRequest(gameId));
        } else {
            console.log(store);
        }
    }, [store]);

    const produce =
        store?.store.filter(
            (product) => product.productType === ProductType.Produce
        ) ?? [];
    const bakary =
        store?.store.filter(
            (product) => product.productType === ProductType.Bakery
        ) ?? [];
    const dairy =
        store?.store.filter(
            (product) => product.productType === ProductType.Dairy
        ) ?? [];
    const dryGoods =
        store?.store.filter(
            (product) => product.productType === ProductType.DryGoods
        ) ?? [];
    const frozen =
        store?.store.filter(
            (product) => product.productType === ProductType.Frozen
        ) ?? [];

    const salesArea = [];
    salesArea.push({
        productName: ProductType.Produce,
        price: getPrice(store, ProductType.Produce),
        products: produce,
    });
    salesArea.push({
        productName: ProductType.Bakery,
        price: getPrice(store, ProductType.Bakery),
        products: bakary,
    });
    salesArea.push({
        productName: ProductType.Dairy,
        price: getPrice(store, ProductType.Dairy),
        products: dairy,
    });
    salesArea.push({
        productName: ProductType.DryGoods,
        price: getPrice(store, ProductType.DryGoods),
        products: dryGoods,
    });
    salesArea.push({
        productName: ProductType.Frozen,
        price: getPrice(store, ProductType.Frozen),
        products: frozen,
    });

    return {
        salesArea,
    };
};

export default useStoreSelect;
