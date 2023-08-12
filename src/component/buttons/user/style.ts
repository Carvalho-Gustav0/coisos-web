import Link from 'next/link'
import styled from 'styled-components'

export const ButtonLink = styled(Link)`
    &:hover {
        color: ${props => props.theme.colors.yellow_700};
    }

    @media screen and (max-width: 576px) {
        padding: 16px;

        &:hover {
            color: ${props => props.theme.colors.white};
        }
    }
`