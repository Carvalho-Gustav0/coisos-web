import * as Style from './style'
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

interface LogType {
    titleContainer?: string;
}

export function LoginRegister(props: LogType) {
    const { message, setName, setIdentifier, setPassword, loginOrRegister } = useContext(UserContext)

    let nameClass = ''

    if (message) {
        nameClass = 'message'
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        loginOrRegister(props.titleContainer)
    }

    return (
        <Style.LayoutLogin>
            <Style.TitleContainer>
                {props.titleContainer}
            </Style.TitleContainer>
            <Style.Form onSubmit={(e) => handleSubmit(e)}>
                {props.titleContainer === 'Register' && (
                    <Style.InputLogin required type="text" placeholder='Type your name' onChange={(ev) => setName(ev.target.value)}/>
                )}
                <Style.InputLogin required type="text" placeholder='Type your identifier' onChange={(ev) => setIdentifier(ev.target.value)}/>
                <Style.InputLogin required type="password" placeholder='Type your password' onChange={(ev) => setPassword(ev.target.value)}/>
                <Style.ButtonLogin className={nameClass} type='submit'>
                    {props.titleContainer}
                </Style.ButtonLogin>
                <Style.Message>
                    {message}
                </Style.Message>
            </Style.Form>
        </Style.LayoutLogin>
    )
}