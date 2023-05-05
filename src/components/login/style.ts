import styled from "styled-components";

export const LayoutLogin = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;

    width: 216px;

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

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
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
    font-weight: 700;

    border-radius: 8px;
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