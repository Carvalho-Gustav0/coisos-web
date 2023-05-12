import styled from "styled-components";
interface SideBar {
    isOpen: boolean
}

export const App = styled.div`
`

export const SideBar = styled.div`
    text-align: center;
    display: flex;
    width: 160px;
    flex-direction: column;
    background-color: ${props => props.theme.colors.gray_200};

`

export const Content = styled.div`
    width: 84%;
`

export const MenuIcon = styled.div`
    ${props => `
        border-left: 1px solid ${props.theme.colors.gray_500};
    `}

    width: 66px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Container = styled.div`
    display: flex;
    position: fixed;
    height: 100vh;
    width: 100vw;
`

export const ContainerSideBar = styled.div.attrs<SideBar>((props) => {
    return {
        isOpen: props.isOpen,
    }
}) <{ isOpen: boolean }>`

    ${props => `
        background-color: ${props.theme.colors.gray_100};
        border-right: 1px solid ${props.theme.colors.gray_500};
        ${props.isOpen ? `width: 16%;` : `width: 66px; justify-content: center;`}
    `}
    display: flex;
    transition: 0.4s;
`