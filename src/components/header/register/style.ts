import styled from "styled-components"

export const TitleContainer = styled.div`
    font-weight: 700;
    text-align: center;
    color: ${props => props.theme.colors.black};   
`

export const ModalRegister = styled.div`
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