import { useEffect, useState } from 'react'
import { LoginRegister } from './login'
import * as Style from './style'

export default function Home() {

    const [ logon, setLogon ] = useState<boolean>()
    const [ register, setRegister ] = useState<boolean>()
    const [ loginRegister, setLoginRegister ] = useState<string>()

    let decreaseLayout = ''

    if (logon) {
        decreaseLayout = 'decrease'
    } else if (register) {
        decreaseLayout = 'decrease'
    }

    function showContainer() {
        if (logon) {
            return <LoginRegister titleContainer={loginRegister}/>
        } else if (register) {
            return <LoginRegister titleContainer={loginRegister}/>
        }
    }

    return (
        <Style.Home>
            <Style.LogIntoContainer>
                <Style.Loggin onClick={() => {setLogon(!logon); setRegister(false); setLoginRegister('Login')}}>
                    Login
                </Style.Loggin>
                <Style.Loggin onClick={() => {setRegister(!register); setLogon(false); setLoginRegister('Register')}}>
                    Register
                </Style.Loggin>
            </Style.LogIntoContainer>
            <Style.Content className={decreaseLayout}>
                ESTOU NOS EXERCICIOS!!!!!!!!!!!!!!!!!!! VOLTAREI DPS
            </Style.Content>
            {showContainer()}
        </Style.Home>
    )
}