import React from 'react';
import MenuLink from '../MenuLink';

type MenuLinksProps = {
    toggleMenu: () => void;
};

const MenuLinks = ({ toggleMenu }: MenuLinksProps) => {
    return (
        <>
            <MenuLink to="/" label="Strona główna" toggleMenu={toggleMenu} />
            <MenuLink to="/manual" label="Podręcznik" toggleMenu={toggleMenu} />
            <MenuLink to="/about" label="O projekcie" toggleMenu={toggleMenu} />
        </>
    );
};

export default MenuLinks;
