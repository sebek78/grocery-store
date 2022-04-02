import React from 'react';
import { useAppSelector } from '@store';
import { Redirect, Route } from 'react-router-dom';

type AuthenticatedRouteProps = {
    children: React.ReactNode;
    path: string;
};

const AuthenticatedRoute = ({ children, ...rest }: AuthenticatedRouteProps) => {
    const authenticated = useAppSelector(({ user }) => user.authenticated);

    return (
        <Route
            {...rest}
            render={() => (authenticated ? children : <Redirect to="/" />)}
        />
    );
};

export default AuthenticatedRoute;
