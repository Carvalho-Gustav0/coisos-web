import styled from "styled-components"

export const Menu = styled.menu`
    display: flex;
    justify-content: center;

    width: 100%;
`

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;

    gap: 1rem;

    @media screen and (max-width: 576px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        padding: 16px;
        gap: 32px;
    }
`