import { useContext, useState } from 'react'
import { LoginRegister } from '../login'
import * as Styled from './style'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'

export function Header() {

    const { setMessage } = useContext(UserContext)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [titleConteiner, setTitleConteiner] = useState<string>('')

    function showContainerLogin() {
        setIsOpen(!isOpen)
    }

    return (
        <Styled.Header>
            <Styled.HeaderContainer>
                <Link to={'/'} >
                    <Styled.Title>
                        Coisos
                    </Styled.Title>
                </Link>

                <Styled.LogContainer>
                    <Styled.buttonLoginContainer>
                        <Styled.Loggin onClick={() => { setTitleConteiner('Login'); showContainerLogin(); setMessage('') }}>
                            Login
                        </Styled.Loggin>
                        <Styled.Loggin onClick={() => { setTitleConteiner('Register'); showContainerLogin(); setMessage('') }}>
                            Register
                        </Styled.Loggin>
                    </Styled.buttonLoginContainer>
                    <Styled.ModalContainer
                        isOpen={isOpen}
                        onBackgroundClick={showContainerLogin}
                        onEscapeKeydown={showContainerLogin}>
                        <LoginRegister titleContainer={titleConteiner} />
                    </Styled.ModalContainer>
                </Styled.LogContainer>
            </Styled.HeaderContainer>
            <Styled.Line />
        </Styled.Header >
    )
}