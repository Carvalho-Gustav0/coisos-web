import * as Styled from './style'
import { ItemMenu } from "./items"
import { FaArchive, FaDice, FaHome } from 'react-icons/fa'

export function MenuApp() {
    const items = [{ path: '/home', name: 'Home', icon: FaHome },
    { path: '/rpg', name: 'Rpg', icon: FaDice },
    { path: '/archives', name: 'Archives', icon: FaArchive }]

    return (
        <Styled.Menu>
            <Styled.ItemContainer>
                {items.map(({ path, name, icon: Icon }, index) => (
                    <ItemMenu path={path} name={name} icon={<Icon />} key={index} />
                ))}
            </Styled.ItemContainer>
        </Styled.Menu>
    )
}