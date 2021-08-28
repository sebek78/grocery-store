import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider } from '@material-ui/core';

type MenuLinkProps = {
    label: string;
    to: string;
    toggleMenu: () => void;
};

const MenuLink = ({ label, to, toggleMenu }: MenuLinkProps) => {
    return (
        <>
            <Button
                color="primary"
                component={Link}
                to={to}
                onClick={toggleMenu}
            >
                {label}
            </Button>
            <Divider />
        </>
    );
};

export default MenuLink;
