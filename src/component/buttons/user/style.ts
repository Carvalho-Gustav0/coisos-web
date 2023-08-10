import Link from 'next/link'
import styled from 'styled-components'

export const ButtonLink = styled(Link)`
    &:hover {
        color: ${props => props.theme.colors.yellow_700};
    }
`