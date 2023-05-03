import { NavLink } from 'react-router-dom';
import * as Style from './style'

interface MenuType {
    path: string;
    name: string;
}

export function ItemMenu(props: MenuType) {
    return (
        <Style.ContainerItem>
            <Style.ItemMenu as={NavLink} to={props.path}>
                {props.name}
            </Style.ItemMenu>
        </Style.ContainerItem>
    )
}