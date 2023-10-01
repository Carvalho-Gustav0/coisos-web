'use client'

import * as Styled from './style'
import Link from 'next/link'
import { MenuApp } from '../menu/index'
import { FaBars } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { openMenu } from '@/redux/menu/menuSlice';

export function Header() {

    const dispatch = useDispatch()
    const isOpenMenu = useSelector((state: RootState) => state.rootReducer.menu.isOpen)

    return (
        <Styled.Header>
            <Styled.TitleContainer>
                <Link href="/home">
                    Bagual Viagens
                </Link>
            </Styled.TitleContainer>
            <Styled.MenuHorizontalContainer className={isOpenMenu === true ? 'isOpen' : ''}>
                <MenuApp />
            </Styled.MenuHorizontalContainer>
            <Styled.MenuHamburger onClick={() => dispatch(openMenu(!isOpenMenu))} $isopen={isOpenMenu ? 1 : 0}>
                <FaBars size={30} color="#fff" />
            </Styled.MenuHamburger>
        </Styled.Header >
    )
}