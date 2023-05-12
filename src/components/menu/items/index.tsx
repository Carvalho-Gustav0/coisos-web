import { NavLink } from 'react-router-dom';
import * as Styled from './style'
import { useState } from 'react';

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