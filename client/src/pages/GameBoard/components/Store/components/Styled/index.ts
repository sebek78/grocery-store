import styled from 'styled-components';

export const StyledProduct = styled.li`
    list-style-type: none;
    border: 2px solid ${(props) => props.color};
    border-radius: 15px;
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: white;
`;

export const StyledImg = styled.img`
    width: 80%;
    height: auto;
`;

export const StyledDate = styled.div`
    border: 2px solid ${(props) => props.color};
    border-radius: 50%;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    position: absolute;
    bottom: -2px;
    right: -2px;
    background-color: white;
    font-weight: bold;
`;

export const StyledRack = styled.li`
    list-style-type: none;
    min-width: 320px;
    max-width: 640px;
    margin-bottom: 16px;
    background-color: azure;
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
    padding: 16px;
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
    padding: 16px;
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
