import React from 'react';
import MenuLink from '../MenuLink';
import { IMenuLink } from '@sharedTypes';

type MenuLinksProps = {
    links: IMenuLink[];
};

const MenuLinks = ({ links }: MenuLinksProps) => {
    return (
        <>
            {links.map((link) => (
                <MenuLink key={link.to} to={link.to} label={link.label} />
            ))}
        </>
    );
};

export default MenuLinks;
