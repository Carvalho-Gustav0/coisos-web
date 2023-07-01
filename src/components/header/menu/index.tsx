import * as Styled from './style'
import { ItemMenu } from "./items"

export function MenuApp() {
    return (
        <Styled.MenuContainer>
            <ItemMenu path={'/home'} name={'Home'} />
            <ItemMenu path={'/rpg'} name={'Rpg'} />
            <ItemMenu path={'/arquivos'} name={'Arquivos'} />
        </Styled.MenuContainer>
    )
}