import * as Styled from './style'
import { useContext, useEffect } from 'react'
import { Form } from '../../form'
import { UserContext } from '../../../contexts/UserContext'

export function ModalRegisterContent() {

    const { register, name, identifier, password, setName, setIdentifier, setPassword } = useContext(UserContext)

    function valueInputs(props: Array<string>) {
        const [name, identifier, password] = props

        setName(name)
        setIdentifier(identifier)
        setPassword(password)
    }

    useEffect(() => {
        if (name && identifier && password) {
            register();
        }
    }, [name, identifier, password])

    return (
        <Styled.ModalRegister>
            <Styled.TitleContainer>
                Login
            </Styled.TitleContainer>

            <Form onResult={valueInputs} textButton='Register' inputs={[
                { type: 'text', text: 'Type your name', required: true },
                { type: 'text', text: 'Type your identifier', required: true },
                { type: 'password', text: 'Type your password', required: true }]} />
        </Styled.ModalRegister>
    )
}