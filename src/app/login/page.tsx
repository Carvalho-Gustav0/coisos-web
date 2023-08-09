'use client'

import { useAuth } from '@/redux/service/login'
import { useDispatch, useSelector } from 'react-redux'
import * as Styled from './style'
import { useState } from 'react'
import { RootState } from '@/redux/store'
import { login, setMessageLogin } from '@/redux/auth/authSlice'
import { useRouter } from 'next/navigation'

export default function Login() {
    const dispatch = useDispatch()
    const route = useRouter()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const messageLogin = useSelector((state: RootState) => state.rootReducer.auth.messageLogin)

    async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const user = useAuth().handleLogin(email, password)
        await user.then((response) => {
            dispatch(login(response))
            route.push('/home')
            window.location.reload()
        }).catch((error) => {
            if (!error.response) {
                dispatch(setMessageLogin('Error connecting to server, try again later'))
            } else {
                dispatch(setMessageLogin(error.response.data.message))
            }
        })
    }

    return (
        <Styled.Login>
            <Styled.ContainerLogin>
                <Styled.TitleContainer>
                    Login
                </Styled.TitleContainer>

                <Styled.Form onSubmit={(e) => handleLogin(e)}>
                    <Styled.Input required type='email' placeholder='Type your email' onChange={(e) => setEmail(e.currentTarget.value)} />
                    <Styled.Input required type='password' placeholder='Type your password' onChange={(e) => setPassword(e.currentTarget.value)} />
                    <Styled.SendFormButton type='submit'>
                        Login
                    </Styled.SendFormButton>
                </Styled.Form>
                <Styled.Message>
                    {messageLogin}
                </Styled.Message>
            </Styled.ContainerLogin>
        </Styled.Login>
    )
}