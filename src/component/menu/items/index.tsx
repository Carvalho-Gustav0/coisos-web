import Link from 'next/link';
import * as Styled from './style'

interface MenuType {
    path: string;
    name: string;
}

export function ItemMenu(props: MenuType) {
    return (
        <Styled.ContainerItem>
            <Link href={props.path}>
                {props.name}
            </Link>
        </Styled.ContainerItem>
    )
}