import styled from "styled-components"

export const LineButtons = styled.div`
    border: 1px solid ${props => props.theme.colors.gray_800};
    height: 54%;

    transform: rotate(15deg);

    @media screen and (max-width: 680px) {
        display: none;
    }
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;

    height: 100%;

    @media screen and (max-width: 680px) {
        flex-direction: column;

        border-top: 1px solid ${props => props.theme.colors.gray_800};
    }   
`