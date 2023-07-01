import styled from "styled-components"

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 16px;
`

export const InputLogin = styled.input`
    width: 100%;

    padding: 0.4rem;

    border-radius: 8px;
    border: 1px solid ${props => props.theme.colors.gray_500};
`

export const ButtonLogin = styled.button`
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

export const Message = styled.div`
`