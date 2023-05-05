import { NavLink } from 'react-router-dom';
import * as Styled from './style'

interface MenuType {
    path: string;
    name: string;
}

export function ItemMenu(props: MenuType) {
    return (
        <Styled.ContainerItem>
            <Styled.ItemMenu as={NavLink} to={props.path}>
                {props.name}
            </Styled.ItemMenu>
        </Styled.ContainerItem>
    )
}