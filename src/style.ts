import styled from "styled-components";

export const App = styled.div`
    display: flex;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 18%;
    height: 100vh;
`

export const Header = styled.div`
    width: 100%;
    height: 20%;
    border-top-right-radius: 24px;
    background-color: #0a011a;
`

export const Title = styled.div`
    font-size: 48px;
    color: #D8D8D8;
    background-color: #0a011a;
    cursor: pointer;
    height: 90%;
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
    height: 80%;
    background-color: #0a011a;
`