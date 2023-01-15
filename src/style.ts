import styled from "styled-components";

export const App = styled.div`
    display: flex;
    flex-wrap: nowrap;
`

export const Header = styled.div`
    width: 16%;
    border-top-right-radius: 24px;
    background-color: #0a011a;
`

export const Title = styled.div`
    font-size: 48px;
    color: #D8D8D8;
    background-color: #0a011a;
    cursor: pointer;
    height: 16%;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 24px;
    border-top: 2px solid purple;
    border-bottom: 2px solid purple;

    &:hover {
        pointer-events: all;
        color: #A020F0;
    }
`

export const Menu = styled.div`
    width: 100%;
    min-height: 85vh;
    background-color: #0a011a;
`