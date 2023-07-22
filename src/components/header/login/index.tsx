import * as Styled from './style'
import { UserContext } from '../../../contexts/UserContext'
import { useContext } from 'react'

export function ModalLoginContent() {
    const { setEmail, setPassword, messageLogin, login } = useContext(UserContext)
    const successMessage = messageLogin === 'Successful login';

    function nahdleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        login()
    }

    return (
        <Styled.ModalLogin>
            <Styled.TitleContainer>
                Login
            </Styled.TitleContainer>

            <Styled.Form onSubmit={(e) => nahdleLogin(e)}>
                <Styled.Input required type='email' placeholder='Type your email' onChange={(e) => setEmail(e.currentTarget.value)} />
                <Styled.Input required type='password' placeholder='Type your password' onChange={(e) => setPassword(e.currentTarget.value)} />
                <Styled.SendFormButton type='submit'>
                    Login
                </Styled.SendFormButton>
            </Styled.Form>
            <Styled.Message success={successMessage}>
                {messageLogin}
            </Styled.Message>
        </Styled.ModalLogin>
    )
}