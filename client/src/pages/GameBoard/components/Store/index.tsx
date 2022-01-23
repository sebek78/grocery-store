import { getGameDataRequest } from '@gameSlice';
import { ProductType, Price } from '@sharedTypes';
import { useAppDispatch, useAppSelector } from '@store';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';

type ProductTypeKey = keyof typeof ProductType;

const Store = () => {
    let { gameId: gameIdParam } = useParams<{ gameId: string }>();
    let gameId = Number.parseInt(gameIdParam, 10);
    const dispatch = useAppDispatch();
    const store = useAppSelector(({ game }) =>
        game.stores.find((store) => store.gameId === gameId)
    );
    const game = useAppSelector(({ game }) =>
        game.games.find((gameData) => gameData.gameId === gameId)
    );
    const gameDataError = useAppSelector(({ game }) => game.gameDataError);

    useEffect(() => {
        if (!store) {
            dispatch(getGameDataRequest(gameId));
        } else {
            console.log(game);
            console.log(store);
        }
    }, [store]);

    if (gameDataError) return <div>{gameDataError}</div>;

    return (
        <div>
            <div className="storeHeader">
                <div>Sklep: {game?.storeName}</div>
                <div>Kasa: {game?.cash}</div>
                <div>
                    Dzień: {game?.turn}, {game?.phase}
                </div>
            </div>
            <div className="storeLayout">
                <div className="salesArea">
                    <ul>
                        {store &&
                            Object.keys(store.prices).map((key: string) => {
                                const productKey: string =
                                    ProductType[key as ProductTypeKey];
                                const price: Price =
                                    store.prices[key as ProductType];

                                return (
                                    <li key={key}>
                                        <div>
                                            <div>{productKey}</div>
                                            <div>Cena: {price.price}</div>
                                            <div>
                                                Wyprzedaż:{' '}
                                                {price.isOnSale.toString()}
                                            </div>
                                            <div>
                                                Cena wyprzedaż:{' '}
                                                {price.onSalePrice}
                                            </div>
                                            <ul>
                                                {store &&
                                                    store.store
                                                        .filter(
                                                            (product) =>
                                                                product.productType ===
                                                                productKey
                                                        )
                                                        .map((product) => (
                                                            <li
                                                                key={product.id}
                                                            >
                                                                {
                                                                    product.productType
                                                                }
                                                                , ED:{' '}
                                                                {
                                                                    product.expirationDate
                                                                }
                                                            </li>
                                                        ))}
                                            </ul>
                                        </div>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
                <div className="storeRoom"></div>
            </div>
        </div>
    );
};

export default Store;
