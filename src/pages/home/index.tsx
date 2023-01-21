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
                Este site é dedicado a tudo relacionado ao jogo <Style.RPG>O CRUZEIRO DOS GURIS</Style.RPG> um RPG (Role-playing game). 
                Aqui você encontrará informações sobre o jogo, sistema, regras, monstros
                e muito mais. Se você é um jogador experiente ou está apenas começando a explorar
                esse incrível universo, este site é o lugar certo para encontrar tudo o que precisa saber. Divirta-se!
            </Style.Content>
            {showContainer()}
        </Style.Home>
    )
}