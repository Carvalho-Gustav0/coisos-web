import * as Styled from './style'

interface ButtonProps {
    text: string
    path: string
}

export function ButtonUser(props: ButtonProps) {
    return (
        <Styled.ButtonLink href={props.path}>
            {props.text}
        </Styled.ButtonLink>
    )
}