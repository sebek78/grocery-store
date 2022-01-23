import React from 'react';
import { useParams } from 'react-router';
import { useAppSelector } from '@store';
import Rack from './components/Rack';
import useStoreSelect from './useStoreSelect';

const Store = () => {
    let { gameId: gameIdParam } = useParams<{ gameId: string }>();
    let gameId = Number.parseInt(gameIdParam, 10);

    const game = useAppSelector(({ game }) =>
        game.games.find((gameData) => gameData.gameId === gameId)
    );
    const gameDataError = useAppSelector(({ game }) => game.gameDataError);

    const { salesArea } = useStoreSelect(gameId);

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
                        {salesArea.map((rack) => (
                            <Rack
                                key={rack.productName}
                                productName={rack.productName}
                                price={rack.price}
                                products={rack.products}
                            />
                        ))}
                    </ul>
                </div>
                <div className="storeRoom"></div>
            </div>
        </div>
    );
};

export default Store;
