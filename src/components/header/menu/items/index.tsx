import * as Styled from './style'
import { NavLink } from 'react-router-dom'

interface MenuType {
    path: string;
    name: string;
}

export function ItemMenu(props: MenuType) {
    return (
        <Styled.ContainerItem as={NavLink} to={props.path}>
            {props.name}
        </Styled.ContainerItem>
    )
}