import styled from "styled-components"

export const Header = styled.header`
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

    padding: 8px;

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    ${props => `
        background-image: linear-gradient(to top, ${props.theme.colors.primary}, ${props.theme.colors.secondary});
    `
    }
`

export const MenuContainer = styled.div`
    width: 66%;

    @media screen and (max-width: 920px) {
        width: 78%;
    }

    @media screen and (max-width: 720px){
        width: 66%;
    }
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

export const Line = styled.div`    
    border: 1px solid ${props => props.theme.colors.gray_500};
`