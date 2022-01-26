import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Divider } from '@material-ui/core';
import { closeMenu } from '@viewsSlice';

type MenuLinkProps = {
    label: string;
    to?: string;
    action?: Function;
};

const MenuLink = ({ label, to, action }: MenuLinkProps) => {
    const dispatch = useDispatch();

    const handleClick = (e: MouseEvent) => {
        if (action) {
            e.preventDefault();
            dispatch(action());
        }
        dispatch(closeMenu());
    };

    return (
        <>
            <Button
                color="primary"
                component={Link}
                to={to ? to : '#'}
                onClick={handleClick}
            >
                {label}
            </Button>
            <Divider />
        </>
    );
};

export default MenuLink;
