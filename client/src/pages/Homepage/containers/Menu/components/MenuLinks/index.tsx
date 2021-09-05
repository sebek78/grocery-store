import React from 'react';
import MenuLink from '../MenuLink';

const MenuLinks = () => {
    return (
        <>
            <MenuLink to="/" label="Strona główna" />
            <MenuLink to="/manual" label="Podręcznik" />
            <MenuLink to="/about" label="O projekcie" />
        </>
    );
};

export default MenuLinks;
