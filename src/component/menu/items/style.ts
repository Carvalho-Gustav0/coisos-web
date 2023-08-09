import styled from "styled-components"

export const ContainerItem = styled.div`
    a {
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

        &.active {
            background-color: ${props => props.theme.colors.gray_300};
        }
    }
`