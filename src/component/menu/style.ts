import styled from "styled-components"

export const Menu = styled.menu`
    display: flex;
    justify-content: center;

    width: 100%;
    height: 100%;
`

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;

    gap: 1rem;

    @media screen and (max-width: 576px) {
        display: flex;

        flex-direction: column;

        width: 100%;
        height: 100%;
    }
`

export const MenuItemContainer = styled.div`
    display: flex;
    flex-direction: row;

    gap: 1rem;

    @media screen and (max-width: 576px) {
        width: 100%;

        padding-top: 12px;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const UserContainer = styled.div`
    display: none;

    @media screen and (max-width: 576px) {
        width: 100%;

        display: flex;
        justify-content: center;

        border-top: 2px solid ${props => props.theme.colors.gray_800};
    }
`