import styled from 'styled-components';
import { theme } from '@utils';

/* Product */

export const ProductCard = styled.li`
    list-style-type: none;
    border: 2px solid ${(props) => props.color};
    border-radius: 16px;
    width: 60px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: white;
`;

export const ProductImg = styled.img`
    width: 40px;
    height: auto;
`;

export const ProductDate = styled.div`
    border: 2px solid ${(props) => props.color};
    border-radius: 50%;
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    position: absolute;
    top: -2px;
    right: -2px;
    background-color: white;
    font-weight: bold;
    font-size: 16px;
`;

/* Rack */

export const StyledRack = styled.li`
    list-style-type: none;
    max-width: 100%;
    margin-bottom: 8px;
    background-color: azure;
    ${theme.breakpoints.up('sm')} {
        max-width: 480px;
    }
`;

export const RackLabel = styled.div`
    border: 4px solid ${(props) => props.color};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    border-bottom: 0;
    padding: 4px 8px;
    @media (min-width: 480px) {
        justify-content: space-between;
        flex-wrap: nowrap;
    }
`;

export const ProductList = styled.ul`
    padding-left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border: 4px solid ${(props) => props.color};
    padding: 8px;
`;

export const ProductName = styled.div`
    font-size: 24px;
    font-weight: bold;
    width: 220px;
    text-align: center;
`;

export const PriceBox = styled.div`
    width: max-content;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

export const PriceLabel = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-right: 8px;
`;

export const OnSaleLabel = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: white;
    background-color: red;
    border-radius: 4px;
    padding: 2px 4px;
    max-width: max-content;
    margin-right: 16px;
`;

export const OnSalePriceLabel = styled.span`
    font-size: 20px;
    font-weight: bold;
    position: relative;
    margin-right: 8px;
    &:before {
        content: '';
        display: block;
        width: 2px;
        height: 30px;
        background-color: rgba(255, 0, 0, 0.5);
        position: absolute;
        top: 0;
        right: 50%;
        transform: rotate(30deg);
    }
    &:after {
        content: '';
        display: block;
        width: 2px;
        height: 30px;
        background-color: rgba(255, 0, 0, 0.5);
        position: absolute;
        top: 0;
        right: 50%;
        transform: rotate(-30deg);
    }
`;

/* Section */

export const StoreSection = styled.div`
    border: 2px solid ${theme.palette.primary.dark};
    border-radius: 16px;
    padding: 8px 16px 8px;
    margin: 16px;
    ${theme.breakpoints.up('sm')} {
        max-width: max-content;
    }
`;

export const SectionLabel = styled.div`
    font-size: ${theme.typography.h4.fontSize};
    padding-bottom: 8px;
    text-align: center;
    color: ${(props) =>
        props.color ? props.color : theme.palette.text.primary};
`;
