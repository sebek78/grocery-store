import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Divider } from '@material-ui/core';
import { closeMenu } from '@viewsSlice';

type MenuLinkProps = {
    label: string;
    to: string;
};

const MenuLink = ({ label, to }: MenuLinkProps) => {
    const dispatch = useDispatch();

    return (
        <>
            <Button
                color="primary"
                component={Link}
                to={to}
                onClick={() => dispatch(closeMenu())}
            >
                {label}
            </Button>
            <Divider />
        </>
    );
};

export default MenuLink;
