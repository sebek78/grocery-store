import React from 'react';
import { useParams } from 'react-router';

const Store = () => {
    let { storeId } = useParams<{ storeId: string }>();
    console.log(storeId);

    return <div>Store {storeId}</div>;
};

export default Store;
