import styled from "styled-components"

interface ItemMenuProps {
    $isactive: number
}

export const ItemMenu = styled.div<ItemMenuProps>`
    a {
        color: ${props => props.theme.colors.primary};
        width: 100%;

        display: flex;

        align-items: center;
        justify-content: center;

        height: 100%;

        &:hover {
            color: ${props => props.theme.colors.yellow_700};
            text-shadow: 1px 0 10px ${props => props.theme.colors.primary};
        }

        ${props => `
            ${props.$isactive && `
                    color: ${props.theme.colors.yellow_700};
                    text-shadow: 1px 0 10px ${props.theme.colors.primary};
                `
        }
        `}
    }

    width: 88px;

    display: flex;

    justify-content: center;

    color: ${props => props.theme.colors.primary};

    @media screen and (max-width: 767px) {
        a {
            padding-inline: 16px 16px;
        }
    }

    @media screen and (max-width: 576px) {
        a {
            padding-inline: 0px 0px;

            gap: 12px;
            padding: 8px;

            color: ${props => props.theme.colors.white};

            display: flex;
            justify-content: start;

            ${props => `
                ${props.$isactive && `
                        color: ${props.theme.colors.yellow_700};
                        text-shadow: 1px 0 10px ${props.theme.colors.primary};
                    `
                }
            `}
        }

        border: 0px solid ${props => props.theme.colors.gray_800};

        width: 100%;
        padding: 6px;
    }
`

export const IconContainer = styled.div`
    display: none;

    @media screen and (max-width: 576px) {
        display: flex;
        color: ${props => props.theme.colors.white};
    }
`