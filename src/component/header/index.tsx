'use client'

import * as Styled from './style'
import Link from 'next/link'
import { MenuApp } from '../menu/index'

export function Header() {
    return (
        <Styled.Header>
            <Styled.HeaderContainer>
                <Link href="/" >
                    <Styled.Title>
                        Coisos
                    </Styled.Title>
                </Link>
                <Styled.MenuContainer>
                    <MenuApp />
                </Styled.MenuContainer>
            </Styled.HeaderContainer>
            <Styled.Line />
        </Styled.Header >
    )
}