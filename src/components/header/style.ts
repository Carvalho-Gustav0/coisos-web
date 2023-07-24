import styled from "styled-components"
import Modal from 'styled-react-modal'

export const Header = styled.header`
    width: 100vw;
`

export const HeaderContainer = styled.div`
    text-align: center;
    display: flex;
    justify-content: space-between;
    flex: 1;

    padding-left: 0.8rem;
`

export const Title = styled.p`
    font-weight: 700;
    font-size: 36px;
    font-family: 'Heebo', sans-serif;

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    ${props => `
        background-image: linear-gradient(to top, ${props.theme.colors.primary}, ${props.theme.colors.secondary});
    `
    }
`

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const LogContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const buttonLoginContainer = styled.div`
    display: flex;
    flex-direction: row;

    height: 100%;
`

export const Loggin = styled.button`
    width: 108px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    cursor:pointer;

    font-weight: 700;
    font-family: 'Heebo', sans-serif;
    
    ${props => `
        color: ${props.theme.colors.primary};
        background-color: ${props.theme.colors.white};
        border: 1px solid ${props.theme.colors.gray_500};
        &:hover {
            background-color: ${props.theme.colors.gray_200};
        }
    `
    }
`

export const ModalContainer = Modal.styled`

`

export const Line = styled.div`
    border: 1px solid ${props => props.theme.colors.gray_500};
`