import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import Rack from './components/Rack';
import useStoreSelect from './useStoreSelect';
import StoreHeader from './components/StoreHeader';
import StoreLayout from './components/StoreLayout';
import SalesArea from './components/SalesArea';
import Racks from './components/Racks';
import Customers from './components/Customers';
import { Grid } from '@mui/material';
import StoreRoom from './components/StoreRoom';

const Store = () => {
    let { gameId: gameIdParam } = useParams<{ gameId: string }>();
    let gameId = Number.parseInt(gameIdParam, 10);
    const { customers, salesArea, game, gameDataError } =
        useStoreSelect(gameId);

    if (gameDataError) return <div>{gameDataError}</div>;

    return (
        <StoreLayout>
            <StoreHeader game={game} />
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Customers customers={customers} />
                <SalesArea salesArea={salesArea}>
                    <Racks>
                        {salesArea.map((rack) => (
                            <Rack
                                key={rack.productName}
                                productName={rack.productName}
                                price={rack.price}
                                products={rack.products}
                            />
                        ))}
                    </Racks>
                </SalesArea>
                <StoreRoom />
            </Grid>
        </StoreLayout>
    );
};

export default Store;
