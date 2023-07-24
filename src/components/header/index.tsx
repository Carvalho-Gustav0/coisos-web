import * as Styled from './style'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ModalLoginContent } from './login'
import { ModalRegisterContent } from './register'
import { MenuApp } from './menu'
import { UserContext } from '../../contexts/UserContext'
import { getAuthToken } from '../utils/cookies'

export function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [component, setComponent] = useState<JSX.Element>()
    const { logout, setMessageLogin } = useContext(UserContext)

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
                {!getAuthToken() ? (
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
                    <Styled.ProfileContainer>
                        <Styled.Loggin>
                            Profile
                        </Styled.Loggin>
                        <Styled.Loggin onClick={() => logout()}>
                            Log Out
                        </Styled.Loggin>
                    </Styled.ProfileContainer>
                )
                }
            </Styled.HeaderContainer>
            <Styled.Line />
        </Styled.Header >
    )
}