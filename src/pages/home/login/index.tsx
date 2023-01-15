import * as Style from './style'
import { useState } from 'react';
import api from '../../../services/api';

interface LogType {
    titleContainer?: string;
}

interface LoginResponse {
    id: string;
    name: string;
    token: string;
    message: string;
}

export function LoginRegister(props: LogType) {

    const [ identifier, setIdentifier ] = useState<string>()
    const [ password, setPassword ] = useState<string>()
    const [ message, setMessage ] = useState<string>()

    function loginRegister() {
        api.post('users/login', {identifier, password}).then((response) => {
            const data = response.data as LoginResponse
            setMessage(data.message)
        }).catch((error) => {
            setMessage(error.response.data.error)
        })
    }

    let nameClass = ''

    if (message) {
        nameClass = 'message'
    }

    return (
        <Style.LayoutLogin>
            <Style.TitleContainer>
                {props.titleContainer}
            </Style.TitleContainer>
            <Style.InputLogin type="text" placeholder='Type your identifier' onChange={(ev) => setIdentifier(ev.target.value)}/>
            <Style.InputLogin type="password" placeholder='Type your password' onChange={(ev) => setPassword(ev.target.value)}/>
            <Style.ButtonLogin className={nameClass} type='submit' onClick={loginRegister}>
                {props.titleContainer}
            </Style.ButtonLogin>
            <Style.Message>
                {message}
            </Style.Message>
        </Style.LayoutLogin>
    )
}