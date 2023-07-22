import * as Styled from './style'
import { UserContext } from '../../../contexts/UserContext'
import { useContext } from 'react'

export function ModalRegisterContent() {
    const { setName, setCPF, setEmail, setPassword, messageLogin, register } = useContext(UserContext)
    const successMessage = messageLogin === 'Successful register';

    function nahdleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        register()
    }

    return (
        <Styled.ModalRegister>
            <Styled.TitleContainer>
                Register
            </Styled.TitleContainer>

            <Styled.Form onSubmit={(e) => nahdleLogin(e)}>
                <Styled.Input required type='text' placeholder='Type your name' onChange={(e) => setName(e.currentTarget.value)} />
                <Styled.Input required type='number' placeholder='Type your cpf' onChange={(e) => setCPF(e.currentTarget.value)} />
                <Styled.Input required type='email' placeholder='Type your email' onChange={(e) => setEmail(e.currentTarget.value)} />
                <Styled.Input required type='password' placeholder='Type your password' onChange={(e) => setPassword(e.currentTarget.value)} />
                <Styled.SendFormButton type='submit'>
                    Register
                </Styled.SendFormButton>
            </Styled.Form>
            <Styled.Message success={successMessage}>
                {messageLogin}
            </Styled.Message>
        </Styled.ModalRegister>
    )
}