import styled from "styled-components";

export const Header = styled.header`
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    width: 100vw;
`

export const HeaderContainer = styled.div`
    text-align: center;
    display: flex;
    justify-content: space-between;
    flex: 1;
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

export const LogContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const buttonLoginContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
`

export const Loggin = styled.button`
    width: 108px;
    height: 100%;
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

export const Container = styled.div`
    position: fixed;
    top: 56px;
    right: 0;
    padding-right: 0.8rem;
    
`

export const Line = styled.div`
    border: 1px solid ${props => props.theme.colors.gray_500};
    width: 100%;
`