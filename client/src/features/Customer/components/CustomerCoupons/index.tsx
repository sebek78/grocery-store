import React from 'react';
import styled from 'styled-components';
import { theme } from '@utils';
import { Grid } from '@mui/material';

const Discount = styled.div`
    width: 32px;
    height: 24px;
    font-size: 16px;
    line-height: 24px;
    margin-right: 8px;
    text-align: center;
    border-radius: 4px;
    color: ${theme.palette.success.contrastText};
    background-color: ${theme.palette.success.main};
`;

const DiscountCard = () => <Discount>S</Discount>;

interface CustomerCouponsProps {
    coupons: number;
}

function CustomerCoupons({ coupons = 0 }: CustomerCouponsProps) {
    if (!coupons) return null;

    const discoutsCards = [];
    for (let i = 0; i < coupons; i++) {
        discoutsCards.push(DiscountCard);
    }

    return (
        <Grid container flexDirection="row">
            {discoutsCards.map((_, index) => (
                <DiscountCard key={index} />
            ))}
        </Grid>
    );
}

export default CustomerCoupons;
