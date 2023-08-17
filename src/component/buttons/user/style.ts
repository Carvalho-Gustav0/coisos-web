import styled from 'styled-components'

interface ButtonProps {
    $isactive: number
}

export const ButtonLink = styled.div<ButtonProps>`
    a {
        &:hover {
            text-shadow: 1px 0 10px ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.yellow_700};
        }

        ${props => `
            ${props.$isactive && `
                    color: ${props.theme.colors.yellow_700};
                    text-shadow: 1px 0 10px ${props.theme.colors.primary};
                `
        }
        `}
    }

    @media screen and (max-width: 576px) {
        padding: 16px;

        &:hover {
            color: ${props => props.theme.colors.white};
        }

        ${props => `
            ${props.$isactive && `
                    color: ${props.theme.colors.yellow_700};
                    text-shadow: 1px 0 10px ${props.theme.colors.primary};
                `
            }
        `}
    }
`