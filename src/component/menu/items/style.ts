import styled from "styled-components"

export const ItemMenu = styled.div`
    a {
        color: ${props => props.theme.colors.primary};
        width: 100%;

        display: flex;

        align-items: center;
        justify-content: center;

        padding-left: 24px;
        padding-right: 24px;

        height: 100%;

        &:hover {
            background-color: ${props => props.theme.colors.gray_800};
        }
    }

    width: 30%;

    display: flex;

    justify-content: center;
    
    border-left: 1px solid ${props => props.theme.colors.gray_800};
    border-right: 1px solid ${props => props.theme.colors.gray_800};

    color: ${props => props.theme.colors.primary};

    @media screen and (max-width: 767px) {
        a {
            padding-left: 16px;
            padding-right: 16px;
        }
    }

    @media screen and (max-width: 576px) {
        a {
            padding-left: 0px;
            padding-right: 0px;

            gap: 12px;

            justify-content: start;

            color: ${props => props.theme.colors.white};
        }

        border: 0px solid ${props => props.theme.colors.gray_800};

        width: 100%;
        padding: 16px;
    }
`

export const IconContainer = styled.div`
    color: ${props => props.theme.colors.white};
`