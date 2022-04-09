import React from 'react';
import MenuLink from '../MenuLink';
import { IMenuLink } from 'src/sharedTypes';

type MenuLinksProps = {
    links: IMenuLink[];
};

const MenuLinks = ({ links }: MenuLinksProps) => {
    return (
        <>
            {links.map((link) => (
                <MenuLink
                    key={link.label}
                    to={link.to}
                    label={link.label}
                    action={link.action}
                />
            ))}
        </>
    );
};

export default MenuLinks;
