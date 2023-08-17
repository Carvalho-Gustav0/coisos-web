import Link from 'next/link';
import * as Styled from './style'
import { usePathname } from 'next/navigation'

interface MenuType {
    path: string;
    name: string;
    icon: React.ReactNode;
}

export function ItemMenu(props: MenuType) {

    const pathName = usePathname();

    const isActive = pathName === props.path;

    return (
        <Styled.ItemMenu $isactive={isActive ? 1 : 0}>
            <Link href={props.path}>
                <Styled.IconContainer>
                    {props.icon}
                </Styled.IconContainer>
                {props.name}
            </Link>
        </Styled.ItemMenu>
    )
}