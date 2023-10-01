import * as Styled from './style'
import { ItemMenu } from "./items"
import { FaArchive, FaDice, FaHome } from 'react-icons/fa'
import { ButtonAuthenticated } from '@/component/buttons/authenticated/isAuthenticated';

export function MenuApp() {
    const items = [{ path: '/home', name: 'HOME', icon: FaHome },
    { path: '/rpg', name: 'RPG', icon: FaDice },
    { path: '/archives', name: 'ARCHIVES', icon: FaArchive }]

    return (
        <Styled.Menu>
            <Styled.ItemContainer>
                <Styled.MenuItemContainer>
                    {items.map(({ path, name, icon: Icon }, index) => (
                        <ItemMenu path={path} name={name} icon={<Icon />} key={index} />
                    ))}
                </Styled.MenuItemContainer>
                <ButtonAuthenticated />
            </Styled.ItemContainer>
        </Styled.Menu>
    )
}