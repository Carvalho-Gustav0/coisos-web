import * as Styled from './style'
import { useState } from 'react'

type Inputs = {
    textButton: string
    inputs: Array<{ type: string, text: string, required: boolean }>
    onResult: (arg: any) => void
}

export function Form(props: Inputs) {
    const [inputValues, setInputValues] = useState<Array<string>>([])

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        props.onResult(inputValues)
    }

    const handleInputChange = (index: number, value: string) => {
        const newInputValues: Array<string> = [...inputValues]
        newInputValues[index] = value
        setInputValues(newInputValues)
    };

    return (
        <Styled.Form onSubmit={(e) => handleSubmit(e)}>
            {props.inputs.map(((value, index) =>
                <Styled.InputLogin required={value.required} key={index} type={value.type}
                    placeholder={value.text} onChange={(e) => { handleInputChange(index, e.target.value) }} />
            ))}
            <Styled.ButtonLogin type='submit'>
                {props.textButton}
            </Styled.ButtonLogin>
        </Styled.Form>
    )
}