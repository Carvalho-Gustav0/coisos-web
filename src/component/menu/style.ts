import styled from "styled-components"

export const Menu = styled.menu`
    display: flex;

    width: 100%;
    height: 100%;

    background-color: ${props => props.theme.colors.secondary};
`

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;

    width: 100%;

    justify-content: space-between;

    gap: 1rem;

    @media screen and (max-width: 680px) {
        display: flex;

        flex-direction: column;
        height: 100%;
    }
`

export const MenuItemContainer = styled.div`
    display: flex;
    flex-direction: row;

    gap: 1rem;

    @media screen and (max-width: 767px) {
        gap: 0.8rem;
    }

    @media screen and (max-width: 680px) {
        width: 100%;

        padding-top: 12px;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
`