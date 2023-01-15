import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ContainerItem = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #0a011a;
`

export const ItemMenu = styled(NavLink)`
    color: #D8D8D8;
    cursor: pointer;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin-left: 10%;
    background-color: #0a011a;
    border-top-left-radius: 36px;
    border-bottom-left-radius: 36px;
    
    &:hover {
        color: #A020F0;
        background-color: rgb(160, 32, 240, 0.1);
    }
    text-decoration: none;

    &.active {
        color: #A020F0;
        background-color: #00000F;
        border-top-left-radius: 36px;
        border-bottom-left-radius: 36px;
        width: 90%;
    }
`