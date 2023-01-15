import styled from "styled-components";

export const LayoutLogin = styled.div`
    background-color: #0a011a;
    min-height: 300px;
    top: 104px;
    right: 0px;
    margin-right: 24px;
    width: 24%;
    position: absolute;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const TitleContainer = styled.div`
    color: #D8D8D8;
    text-align: center;
    font-size: x-large;
    margin-top: 30px;
`

export const InputLogin = styled.input`
    width: 80%;
    height: 36px;
    border-radius: 24px;

    font-size: medium;
    text-indent: 12px;

    color: #D8D8D8;

    border: 2px solid purple;

    background-color: #0a011a;

    ::placeholder {
        text-align: center;
        text-indent: 0px;
    }
`

export const ButtonLogin = styled.button`
    width: 54%;
    height: 36px;
    border-radius: 24px;
    margin-bottom: 12px;
    cursor: pointer;

    color: #D8D8D8;
    font-size: medium;

    border: 2px solid purple;

    background-color: #0a011a;

    &.message {
        margin-bottom: 0%;
    }

    &:hover {
        color: #A020F0;
        background-color: rgb(160, 32, 240, 0.1);
    }

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Message = styled.div`
    color: #D8D8D8;
    text-align: center;
    font-size: medium;
    margin-bottom: 6px;
`