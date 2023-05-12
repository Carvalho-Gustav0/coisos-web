import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ContainerItem = styled(NavLink)`
    padding: 0.5rem;
    color: ${props => props.theme.colors.black};
    font-weight: 700;
    border-bottom: 1px solid ${props => props.theme.colors.gray_500};

    &.active {
        background-color: ${props => props.theme.colors.gray_300};
    }
    
    &:hover {
        background-color: ${props => props.theme.colors.gray_300};
    }
`