'use client'

import { useAuth } from '@/redux/service/login'
import { useDispatch, useSelector } from 'react-redux'
import * as Styled from './style'
import { useState } from 'react'
import { RootState } from '@/redux/store'
import { setMessageLogin, setMessageRegister } from '@/redux/auth/authSlice'
import { useRouter } from 'next/navigation';
import { ListFormat } from 'typescript'

export default function Register() {
    const [name, setName] = useState<string>('')
    const [cpf, setCPF] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const dispatch = useDispatch()
    const router = useRouter()

    dispatch(setMessageLogin(''))

    const messageRegister = useSelector((state: RootState) => state.rootReducer.auth.messageRegister)
    const { handleRegister } = useAuth()

    function handleRegisterForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const isRegistered = handleRegister(name, cpf, email, password)
        isRegistered.then(() => {
            dispatch(setMessageRegister('Success Register'))
            router.push('/login');
        }).catch((error) => {
            console.log(error)
            if (!error.response) {
                dispatch(setMessageRegister('Error connecting to server, try again later'))
            } else {
                error.response.data.message.map((value: string) => {
                    dispatch(setMessageRegister(value))
                })
            }
        })
    }

    return (
        <Styled.Register>
            <Styled.ContainerRegister>
                <Styled.TitleContainer>
                    Welcome to <span className='title'>Bagual Viagens</span>
                </Styled.TitleContainer>

                <Styled.Form onSubmit={(e) => handleRegisterForm(e)}>
                    <Styled.Input required type='text' placeholder='Type your name' onChange={(e) => setName(e.currentTarget.value)} />
                    <Styled.Input required type='email' placeholder='Type your email' onChange={(e) => setEmail(e.currentTarget.value)} />
                    <Styled.Input required type='password' placeholder='Type your password' onChange={(e) => setPassword(e.currentTarget.value)} />
                    <Styled.SendFormButton type='submit'>
                        Register
                    </Styled.SendFormButton>
                </Styled.Form>
                <Styled.Message $sucess={messageRegister}>
                    {messageRegister}
                </Styled.Message>
            </Styled.ContainerRegister>
        </Styled.Register>
    )
}