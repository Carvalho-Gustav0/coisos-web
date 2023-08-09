'use client'

import { useAuth } from '@/redux/service/login'
import { useDispatch, useSelector } from 'react-redux'
import * as Styled from './style'
import { useState } from 'react'
import { RootState } from '@/redux/store'
import { login, setMessageLogin, setMessageRegister } from '@/redux/auth/authSlice'
import { useRouter } from 'next/navigation';

export default function Login() {
    const dispatch = useDispatch()
    const { handleLogin } = useAuth()
    const router = useRouter()

    dispatch(setMessageRegister(''))

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const messageLogin = useSelector((state: RootState) => state.rootReducer.auth.messageLogin)

    async function handleLoginForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const user = handleLogin(email, password)
        await user.then((response) => {
            dispatch(login(response))
            dispatch(setMessageLogin('Success Login'))
            router.push('/home')
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

                <Styled.Form onSubmit={(e) => handleLoginForm(e)}>
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