import { styled } from "styled-components";

export const Main = styled.main`
    position: fixed;

    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.secondary};

    overflow-y: auto;
`