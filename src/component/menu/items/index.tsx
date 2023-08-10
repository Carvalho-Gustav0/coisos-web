import Link from 'next/link';
import * as Styled from './style'

interface MenuType {
    path: string;
    name: string;
    icon: React.ReactNode;
}

export function ItemMenu(props: MenuType) {
    return (
        <Styled.ItemMenu>
            <Link href={props.path}>
                <Styled.IconContainer>
                    {props.icon}
                </Styled.IconContainer>
                {props.name}
            </Link>
        </Styled.ItemMenu>
    )
}