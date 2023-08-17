import styled from "styled-components"

export const LineButtons = styled.div`
    border: 1px solid ${props => props.theme.colors.gray_800};
    height: 54%;

    transform: rotate(15deg);

    @media screen and (max-width: 576px) {
        display: none;
    }
`

export const ButtonLogout = styled.a`
`

export const ButtonsContainer = styled.div`
    width: 32%;
    height: 100%;

    display: flex;

    justify-content: end;
    align-items: center;

    padding-right: 16px;

    gap: 24px;

    @media screen and (max-width: 767px) {
        justify-content: center;
        padding-right: 0px;
        gap: 16px;
    }

    @media screen and (max-width: 576px) {
        width: 100%;

        gap: 0px;

        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

export const Buttons = styled.div`

    @media screen and (max-width: 576px) {
        a {
            padding: 6px;

            color: ${props => props.theme.colors.white};

            width: 100%;

            &:hover {
                color: ${props => props.theme.colors.yellow_700};
            }
            
        }

        border: 0px solid ${props => props.theme.colors.gray_800};

        display: flex;
        align-items: center;

        width: 100%;
        padding: 8px;
        gap: 12px;
    }
`

export const IconContainer = styled.div`
    display: none;

    @media screen and (max-width: 576px) {
        display: flex;
        color: ${props => props.theme.colors.white};
    }
`