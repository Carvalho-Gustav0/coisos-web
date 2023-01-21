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
    align-items: center;
`

export const TitleContainer = styled.div`
    color: #D8D8D8;
    text-align: center;
    font-size: x-large;
    margin-top: 30px;
`

export const Form = styled.form`
    width: 80%;
    height: 232px;
    margin-top: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const InputLogin = styled.input`
    width: 100%;
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
    color: #D8D8D8;
    width: 36%;
    padding: 8px;
    cursor: pointer;
    text-align: center;
    margin-right: 10px;
    font-size: large;
    border-radius: 32px;
    background-color: #0a011a;

    border-top: 2px solid purple;
    border-bottom: 2px solid purple;
    border-left: 0px;
    border-right: 0px;

    background-color: #0a011a;

    &.message {
        margin-bottom: 0%;
    }

    &:hover {
        color: #A020F0;
        background-color: rgb(160, 32, 240, 0.1);
    }
`

export const Message = styled.div`
    color: #D8D8D8;
    text-align: center;
    font-size: medium;
`