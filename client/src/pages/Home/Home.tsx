import React from 'react';
import { useAppSelector } from '@store';

const Home = () => {
    const username = useAppSelector(({ user }) => user.username);
    return <div>Home {username}</div>;
};

export default Home;
