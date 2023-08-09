import styled from "styled-components"

export const MenuContainer = styled.div`
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 720px) {
        padding-right: 6px;
    }

    @media screen and (max-width: 540px) {
        display: none;
    }
`

export const ItemsMenu = styled.div`
    display: flex;
    flex-direction: row;
`

export const UserContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const ButtonUser = styled.button`
    width: 108px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    cursor:pointer;

    font-weight: 700;
    font-family: 'Heebo', sans-serif;
    
    ${props => `
        color: ${props.theme.colors.primary};
        background-color: ${props.theme.colors.white};
        border: 1px solid ${props.theme.colors.gray_500};
        &:hover {
            background-color: ${props.theme.colors.gray_200};
        }
    `
    }

    @media screen and (max-width: 720px) {
        padding: 8px
    }
`

export const ProfileContainer = styled.div`
    display: none;

    @media screen and (max-width: 720px) {
        display: flex;
        align-items: center;
        padding-left: 8px;
        padding-right: 8px;

        ${props => `
            color: ${props.theme.colors.primary};
            background-color: ${props.theme.colors.white};
            border: 1px solid ${props.theme.colors.gray_500};
            &:hover {
                background-color: ${props.theme.colors.gray_200};
            }
        `
        }
    }
    
`

export const Dropdown = styled.div`
    position: fixed;
    top: 58px;
    right: 0;
    margin-right: 6px;

    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 8px;

    background-color: #fff;

    border: 1px solid ${props => props.theme.colors.gray_500};

    &::before {
        content: "";
        position: absolute;
        top: -9px;
        right: 10px;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid ${props => props.theme.colors.white};
    }

    .arrow-border {
        position: absolute;
        top: -8px;
        right: 13px;
        width: 14px;
        height: 14px;
        border-left: 2px solid ${props => props.theme.colors.gray_500};
        border-top: 2px solid ${props => props.theme.colors.gray_500};
        transform: rotate(45deg);
        background-color: #fff;
        z-index: -1;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;

    @media screen and (max-width: 720px) {
        display: none;
    }
`