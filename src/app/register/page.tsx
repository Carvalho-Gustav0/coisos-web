'use client'

import { useAuth } from '@/redux/service/login'
import { useDispatch, useSelector } from 'react-redux'
import * as Styled from './style'
import { useState } from 'react'
import { RootState } from '@/redux/store'
import { setMessageLogin } from '@/redux/auth/authSlice'
import { useRouter } from 'next/navigation'

export default function Register() {
    const dispatch = useDispatch()
    const route = useRouter()
    const [name, setName] = useState<string>('')
    const [cpf, setCPF] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const messageLogin = useSelector((state: RootState) => state.rootReducer.auth.messageLogin)


    function handleRegister(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const isRegistered = useAuth().handleRegister(name, cpf, email, password)
        isRegistered.then(() => {
            route.push('/login')
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
        <Styled.Register>
            <Styled.ContainerRegister>
                <Styled.TitleContainer>
                    Register
                </Styled.TitleContainer>

                <Styled.Form onSubmit={(e) => handleRegister(e)}>
                    <Styled.Input required type='text' placeholder='Type your name' onChange={(e) => setName(e.currentTarget.value)} />
                    <Styled.Input required type='number' placeholder='Type your cpf' onChange={(e) => setCPF(e.currentTarget.value)} />
                    <Styled.Input required type='email' placeholder='Type your email' onChange={(e) => setEmail(e.currentTarget.value)} />
                    <Styled.Input required type='password' placeholder='Type your password' onChange={(e) => setPassword(e.currentTarget.value)} />
                    <Styled.SendFormButton type='submit'>
                        Register
                    </Styled.SendFormButton>
                </Styled.Form>
                <Styled.Message>
                    {messageLogin}
                </Styled.Message>
            </Styled.ContainerRegister>
        </Styled.Register>
    )
}