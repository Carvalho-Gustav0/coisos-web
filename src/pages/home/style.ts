import styled from "styled-components";

export const Home = styled.div`
    width: 82%;
`

export const LogIntoContainer = styled.div`
    width: 12%;
    display: flex;
    justify-content: center;
    position: absolute;
    right: 48px;
    margin-right: 18px;
`

export const Loggin = styled.p`
    color: #D8D8D8;
    padding: 14px;
    cursor: pointer;
    text-align: center;
    margin-right: 10px;
    font-size: x-large;
    border-radius: 32px;
    background-color: #0a011a;

    border-top: 2px solid purple;
    border-bottom: 2px solid purple;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;

    &:hover {
        color: #A020F0;
        background-color: rgb(160, 32, 240, 0.1);
    }
`

export const Content = styled.div`
    top: 90px;
    width: 60%;
    margin-left: 1%;
    position: absolute;
    background-color: #0a011a;
    color: #D8D8D8;
    font-size: large;
    padding: 18px;
    border-radius: 24px;

    &.decrease {
        width: 48%;
    }
`