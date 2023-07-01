import * as Styled from './style'
import { Form } from '../../form'
import { UserContext } from '../../../contexts/UserContext'
import { useContext, useEffect } from 'react'

export function ModalLoginContent() {
    const { login, identifier, password, setIdentifier, setPassword } = useContext(UserContext)

    function valueInputs(props: Array<string>) {
        const [identifier, password] = props

        setIdentifier(identifier)
        setPassword(password)
    }

    useEffect(() => {
        if (identifier && password) {
            login()
        }
    }, [identifier, password])

    return (
        <Styled.ModalLogin>
            <Styled.TitleContainer>
                Login
            </Styled.TitleContainer>

            <Form textButton='Login' onResult={valueInputs} inputs={[
                { type: 'text', text: 'Type your identifier', required: true },
                { type: 'password', text: 'Type your password', required: true }]} />
        </Styled.ModalLogin>
    )
}