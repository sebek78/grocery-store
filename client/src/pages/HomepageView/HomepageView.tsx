import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useAppSelector } from '@store';
import { LoginDialog, RegisterDialog } from '@features';
import { Menu } from '@features';
import { About, Home, ManualPage } from '@pages';
import { IMenuLink } from 'src/sharedTypes';
import { PageLayout } from '@components';

export const homepageMenuLinks: IMenuLink[] = [
    { to: '/', label: 'Strona główna' },
    { to: '/manual', label: 'Podręcznik' },
    { to: '/about', label: 'O projekcie' },
];

const HomepageView = () => {
    const authenticated = useAppSelector(({ user }) => user.authenticated);
    let history = useHistory();

    useEffect(() => {
        if (authenticated) history.push('/game');
    }, [authenticated]);

    return (
        <>
            <PageLayout>
                <Switch>
                    <Route path="/manual">
                        <ManualPage />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="*">
                        <Home />
                    </Route>
                </Switch>
            </PageLayout>
            <Menu links={homepageMenuLinks} />
            <LoginDialog />
            <RegisterDialog />
        </>
    );
};

export default HomepageView;
