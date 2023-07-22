import styled from "styled-components"

interface MessageProps {
    success: boolean;
}

export const ModalLogin = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 232px;

    gap: 8px;
    padding: 0.5rem;

    border-radius: 6px;

    ${props => `
        border-left: 1px solid ${props.theme.colors.gray_200};
        border-right: 1px solid ${props.theme.colors.gray_200};
        border-bottom: 1px solid ${props.theme.colors.gray_200};
        box-shadow: 0px 0px 8px ${props.theme.colors.gray_500};
    `
    }
`

export const TitleContainer = styled.div`
    font-weight: 700;
    text-align: center;
    color: ${props => props.theme.colors.black};   
`

export const Message = styled.div<MessageProps>`
    color: ${props => props.success ? props.theme.colors.green_500 : props.theme.colors.red_900};
`

export const Input = styled.input`
    width: 100%;

    padding: 0.4rem;

    border-radius: 8px;
    border: 1px solid ${props => props.theme.colors.gray_500};
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 16px;
`

export const SendFormButton = styled.button`
    width: 50%;

    padding: 0.4rem;
    border-radius: 8px;

    font-weight: 700;

    cursor: pointer;

    ${props => `
        background-color: ${props.theme.colors.gray_200};
        border: 1px solid ${props.theme.colors.gray_500};
        color: ${props.theme.colors.black};

        &:hover {
            background-color: ${props.theme.colors.gray_300};
        }
    `}
`