import Link from 'next/link';
import * as Styled from './style'
import { usePathname } from 'next/navigation'
import { useDispatch } from 'react-redux';
import { openMenu } from '@/redux/menu/menuSlice';

interface MenuType {
    path: string;
    name: string;
    icon: React.ReactNode;
}

export function ItemMenu(props: MenuType) {

    const pathName = usePathname();

    const isActive = pathName === props.path;

    const dispatch = useDispatch()

    return (
        <Styled.ItemMenu $isactive={isActive ? 1 : 0} onClick={() => dispatch(openMenu(false))}>
            <Link href={props.path}>
                <Styled.IconContainer>
                    {props.icon}
                </Styled.IconContainer>
                {props.name}
            </Link>
        </Styled.ItemMenu>
    )
}