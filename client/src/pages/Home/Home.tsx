import React from 'react';
import { RootState } from 'src/store/store';
import { useSelector } from 'react-redux';

const Home = () => {
    const username = useSelector((state: RootState) => state.user.username);
    return <div>Home {username}</div>;
};

export default Home;
