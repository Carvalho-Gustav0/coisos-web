import { styled } from "styled-components"

export const Register = styled.main`
    display: flex;

    position: fixed;

    width: 100%;
    height: 100vh;

    justify-content: center;
    align-items: center;

    background-image: url('/deus.svg');
    background-size: cover;
    background-position: center;

    background-color: ${props => props.theme.colors.gray_900};
`

export const ContainerRegister = styled.div`
    width: 560px;
    min-height: 384px;

    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 16px;

    padding-top: 30px;
    padding-inline: 60px 60px;

    gap: 36px;

    border-radius: 6px;

    box-shadow: 0px 0px 12px ${props => props.theme.colors.primary};

    @media screen and (max-width: 576px){
        width: 260px;
        padding-inline: 6px 6px;
    }
`

export const TitleContainer = styled.div`
    font-weight: 700;
    text-align: center;

    color: ${props => props.theme.colors.white};

    .title {
        color:  ${props => props.theme.colors.primary};
        text-shadow: 1px 1px 6px ${props =>props.theme.colors.primary};
    }
`

interface MessageProps {
    $sucess: string
}

export const Message = styled.div<MessageProps>`
    color: ${props => props.$sucess === 'Success Register' ? props.theme.colors.green_500 : props.theme.colors.red_900};
    padding-bottom: 8px;
`

export const Input = styled.input`
    width: 100%;

    padding: 0.8rem;

    ${props => `
        background-color: ${props.theme.colors.gray_200};
        border: 0px solid ${props.theme.colors.black};
        color: ${props.theme.colors.secondary};
    `}

    border-radius: 8px;
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 24px;
`

export const SendFormButton = styled.button`
    width: 30%;

    padding: 0.8rem;
    border-radius: 8px;

    font-weight: 700;

    cursor: pointer;

    ${props => `
        background-color: ${props.theme.colors.gray_200};
        border: 0px solid ${props.theme.colors.black};
        color: ${props.theme.colors.secondary};

        &:hover {
            background-color: ${props.theme.colors.gray_500};
        }
    `}
`