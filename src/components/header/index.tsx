import * as Styled from './style'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ModalLoginContent } from './login'
import { ModalRegisterContent } from './register'
import { MenuApp } from './menu'
import { UserContext } from '../../contexts/UserContext'

export function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [component, setComponent] = useState<JSX.Element>()
    const { logout, userToken, setMessageLogin } = useContext(UserContext)

    function showContainerLogin() {
        setIsOpen(!isOpen)
        setMessageLogin('')
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
                {userToken === '' ? (
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
                ) : (
                    <Styled.Loggin onClick={() => { logout() }}>
                        Log Out
                    </Styled.Loggin>
                )
                }
            </Styled.HeaderContainer>
            <Styled.Line />
        </Styled.Header >
    )
}