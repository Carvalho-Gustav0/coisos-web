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
    
    z-index: 1;

    position: fixed;

    @media screen and (max-width: 680px) {
        height: 80px;

        
        padding-right: 12px;
    }
`

export const TitleContainer = styled.div`
    width: 18%;

    font-size: x-large;

    text-align: center;

    a {
        color: ${props => props.theme.colors.primary};
        &:hover {
            text-shadow: 1px 0 10px ${props => props.theme.colors.yellow_400};
            color: ${props => props.theme.colors.primary};
        }
    }

    color: ${props => props.theme.colors.primary};

    @media screen and (max-width: 840px) {
        width: 24%;
    }

    @media screen and (max-width: 767px) {
        width: 24%;
        font-size: large;
    }

    @media screen and (max-width: 680px) {
        width: 54%;

        font-size: large;
    }
`

export const MenuHorizontalContainer = styled.div`
    width: 82%;
    height: 100%;

    display: flex;

    justify-content: center;

    @media screen and (max-width: 767px) {
        width: 76%;
    }

    @media screen and (max-width: 680px) {
        overflow-y: auto;

        position: fixed;

        right: 0;
        top: 80px;

        z-index: 1;

        height: 100vh;

        width: 0;

        &.isOpen {
            width: 50%;

            transition: transform 0.5s;
        }

        background-color: ${props => props.theme.colors.gray_900};
    }
`

interface MenuHamburgerProps {
    $isopen: number
}

export const MenuHamburger = styled.div<MenuHamburgerProps>`
    display: none;

    @media screen and (max-width: 680px) {
        display: flex;

        transition: transform 0.3s;

        ${props => props.$isopen && `
            transform: rotate(90deg);
        `}
    }
`