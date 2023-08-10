'use client'

import * as Styled from './style'
import Link from 'next/link'
import { MenuApp } from '../menu/index'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { ButtonUser } from '../buttons/user/button'
import { AiOutlineUser } from 'react-icons/ai'

export function Header() {

    const [openMenu, setOpenMenu] = useState<boolean>(false)

    return (
        <Styled.Header>
            <Styled.TitleContainer>
                <Link href="home">
                    Bagual Viagens
                </Link>
            </Styled.TitleContainer>
            <Styled.MenuHorizontalContainer>
                <MenuApp />
            </Styled.MenuHorizontalContainer>
            <Styled.UserContainer>
                <ButtonUser text='Login' path='/login' />
                <Styled.LineButtons />
                <ButtonUser text='Register' path='/register' />
            </Styled.UserContainer>
            <Styled.MenuHamburger onClick={() => setOpenMenu(!openMenu)} isopen={openMenu ? 1 : 0}>
                <FaBars size={30} color="#fff" />
            </Styled.MenuHamburger>
            {openMenu && (
                <Styled.MenuVerticalContainer>
                    <MenuApp />
                </Styled.MenuVerticalContainer>
            )}
        </Styled.Header>
    )
}