import { useContext, useState } from 'react'
import { LoginRegister } from '../login'
import * as Styled from './style'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'

export function Header() {

    const [logon, setLogon] = useState<boolean>(false)
    const [register, setRegister] = useState<boolean>(false)
    const { setMessage } = useContext(UserContext)

    function showContainerLogin() {
        if (logon) {
            return <LoginRegister titleContainer='Login' />
        } else if (register) {
            return <LoginRegister titleContainer='Register' />
        }
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
                        <Styled.Loggin onClick={() => { setLogon(!logon); setRegister(false); setMessage('') }}>
                            Login
                        </Styled.Loggin>
                        <Styled.Loggin onClick={() => { setRegister(!register); setLogon(false); setMessage('') }}>
                            Register
                        </Styled.Loggin>
                    </Styled.buttonLoginContainer>
                    <Styled.Container>
                        {showContainerLogin()}
                    </Styled.Container>
                </Styled.LogContainer>
            </Styled.HeaderContainer>
            <Styled.Line />
        </Styled.Header >
    )
}