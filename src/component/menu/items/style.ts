import styled from "styled-components"

interface ItemMenuProps {
    $isactive: number
}

export const ItemMenu = styled.div<ItemMenuProps>`
    a {
        color: ${props => props.theme.colors.white};
        
        width: 100%;
        height: 100%;

        display: flex;

        justify-content: center;
        align-items: center;

        gap: 12px;

        &:hover {
            text-shadow: 1px 0 10px ${props => props.theme.colors.yellow_700};
            color: ${props => props.theme.colors.primary};
        }

        ${props => `
            ${props.$isactive && `
                    color: ${props.theme.colors.yellow_700};
                    text-shadow: 1px 0 10px ${props.theme.colors.primary};
                `
            }
        `}
    }

    width: 152px;

    display: flex;
    

    color: ${props => props.theme.colors.primary};

    @media screen and (max-width: 991px) {
        a {
            padding-inline: 8px 8px;
        }

        width: 120px;
    }

    @media screen and (max-width: 840px) {
        a {
            padding-inline: 8px 8px;
        }

        width: 96px;
    }

    @media screen and (max-width: 680px) {
        a {
            padding-inline: 0px 0px;

            gap: 18px;
            padding: 8px;

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
    color: ${props => props.theme.colors.white};
    display: none;

    @media screen and (max-width: 680px) {
        display: flex;
    }
`