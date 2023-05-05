import * as Styled from './style'
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

interface LogType {
    titleContainer: string;
}

export function LoginRegister(props: LogType) {
    const { message, setName, setIdentifier, setPassword, loginOrRegister } = useContext(UserContext)

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        loginOrRegister(props.titleContainer)
    }

    return (
        <Styled.LayoutLogin>
            <Styled.TitleContainer>
                {props.titleContainer}
            </Styled.TitleContainer>
            <Styled.Form onSubmit={(e) => handleSubmit(e)}>
                {props.titleContainer === 'Register' && (
                    < Styled.InputLogin required type="text" placeholder='Type your name' onChange={(ev) => setName(ev.target.value)} />
                )}
                <Styled.InputLogin required type="text" placeholder='Type your identifier' onChange={(ev) => setIdentifier(ev.target.value)} />
                <Styled.InputLogin required type="password" placeholder='Type your password' onChange={(ev) => setPassword(ev.target.value)} />
                <Styled.ButtonLogin type='submit'>
                    {props.titleContainer}
                </Styled.ButtonLogin>
                <Styled.Message>
                    {message}
                </Styled.Message>
            </Styled.Form>
        </Styled.LayoutLogin>
    )
}