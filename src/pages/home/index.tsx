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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Style.Content>
            {showContainer()}
        </Style.Home>
    )
}