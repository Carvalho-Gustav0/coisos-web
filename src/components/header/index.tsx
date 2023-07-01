import * as Styled from './style'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ModalLoginContent } from './login'
import { ModalRegisterContent } from './register'
import { MenuApp } from './menu'

export function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [component, setComponent] = useState<JSX.Element>()

    function showContainerLogin() {
        setIsOpen(!isOpen)
    }

    return (
        <Styled.Header>
            <Styled.HeaderContainer>
                <Link to={'/home'} >
                    <Styled.Title>
                        Coisos
                    </Styled.Title>
                </Link>
                <Styled.MenuContainer>
                    <MenuApp />
                </Styled.MenuContainer>
                <Styled.LogContainer>
                    <Styled.buttonLoginContainer>
                        <Styled.Loggin onClick={() => { showContainerLogin(); setComponent(<ModalLoginContent />) }}>
                            Login
                        </Styled.Loggin>
                        <Styled.Loggin onClick={() => { showContainerLogin(); setComponent(<ModalRegisterContent />) }}>
                            Register
                        </Styled.Loggin>
                    </Styled.buttonLoginContainer>
                    <Styled.ModalContainer
                        isOpen={isOpen}
                        onBackgroundClick={showContainerLogin}
                        onEscapeKeydown={showContainerLogin}
                        children={component} />
                </Styled.LogContainer>
            </Styled.HeaderContainer>
            <Styled.Line />
        </Styled.Header >
    )
}