import * as Style from './style'
import { useContext, useState } from 'react';
import api from '../../../services/api';
import { UserContext } from '../../../contexts/UserContext';

interface LogType {
    titleContainer: string;
}

export function LoginRegister(props: LogType) {
    const { message, setName, setIdentifier, setPassword, loginOrRegister } = useContext(UserContext)

    let nameClass = ''

    if (message) {
        nameClass = 'message'
    }

    return (
        <Style.LayoutLogin>
            <Style.TitleContainer>
                {props.titleContainer}
            </Style.TitleContainer>
            {props.titleContainer === 'Register' && (
                <Style.InputLogin type="text" placeholder='Type your name' onChange={(ev) => setName(ev.target.value)}/>
            )}
            <Style.InputLogin type="text" placeholder='Type your identifier' onChange={(ev) => setIdentifier(ev.target.value)}/>
            <Style.InputLogin type="password" placeholder='Type your password' onChange={(ev) => setPassword(ev.target.value)}/>
            <Style.ButtonLogin className={nameClass} type='submit' onClick={() => loginOrRegister(props.titleContainer)}>
                {props.titleContainer}
            </Style.ButtonLogin>
            <Style.Message>
                {message}
            </Style.Message>
        </Style.LayoutLogin>
    )
}