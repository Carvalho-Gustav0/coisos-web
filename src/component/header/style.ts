import styled from "styled-components"

export const Header = styled.header`
    width: 100vw;
    height: 60px;

    display: flex;
    flex-direction: row;

    font-family: Inter;

    align-items: center;

    background-color: ${props => props.theme.colors.secondary};
    border-bottom: 1px solid ${props => props.theme.colors.gray_800};

    z-index: 0;

    @media screen and (max-width: 576px) {
        height: 80px;

        justify-content: space-between;
        padding-right: 12px;
    }
`

export const TitleContainer = styled.div`
    width: 18%;

    font-size: x-large;

    padding-left: 16px;

    a {
        color: ${props => props.theme.colors.primary};
        &:hover {
            text-shadow: 1px 0 10px ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.yellow_700};
        }
    }
    color: ${props => props.theme.colors.primary};

    @media screen and (max-width: 1199px) {
        width: 30%;
    }

    @media screen and (max-width: 991px) {
        width: 30%;
    }

    @media screen and (max-width: 767px) {
        width: 30%;
        font-size: large;
    }

    @media screen and (max-width: 576px) {
        width: 54%;

        font-size: large;
    }
`

export const MenuHorizontalContainer = styled.div`
    width: 50%;
    height: 100%;

    display: flex;

    justify-content: center;

    @media screen and (max-width: 1199px) {
        
    }

    @media screen and (max-width: 991px) {
        
    }

    @media screen and (max-width: 767px) {
        width: 42%;
    }

    @media screen and (max-width: 576px) {
        display: none;
    }
`

export const UserContainer = styled.div`
    width: 32%;
    height: 100%;

    display: flex;

    justify-content: end;
    align-items: center;

    padding-right: 16px;

    gap: 24px;

    a {
        color: ${props => props.theme.colors.primary};
    }

    @media screen and (max-width: 767px) {
        justify-content: center;
        padding-right: 0px;
    }

    @media screen and (max-width: 576px) {
        display: none;
    }
`

interface MenuHamburgerProps {
    $isopen: number
}

export const MenuHamburger = styled.div<MenuHamburgerProps>`
    display: none;

    @media screen and (max-width: 576px) {
        display: flex;

        transition: transform 0.3s;

        ${props => props.$isopen && `
            transform: rotate(90deg);
        `}
    }
`

export const LineButtons = styled.div`
    border: 1px solid ${props => props.theme.colors.gray_800};
    height: 54%;

    transform: rotate(15deg);
`

export const MenuVerticalContainer = styled.div`
    position: fixed;

    right: 0;
    top: 80px;

    z-index: 1;

    height: 100vh;
    width: 50%;

    background-color: ${props => props.theme.colors.gray_900};
`