'use client'

import { useDispatch } from 'react-redux'
import * as Styled from './style'
import { openMenu } from '@/redux/menu/menuSlice'

export default function RPG() {
    const dispatch = useDispatch()

    return (
        <Styled.Main onClick={() => dispatch(openMenu(false))}>
            Este site é dedicado a tudo relacionado ao jogo O CRUZEIRO DOS GURIS um RPG (Role-playing game).
            Aqui você encontrará informações sobre o jogo, sistema, regras, monstros
            e muito mais. Se você é um jogador experiente ou está apenas começando a explorar
            esse incrível universo, este site é o lugar certo para encontrar tudo o que precisa saber. Divirta-se!
        </Styled.Main>
    )
}