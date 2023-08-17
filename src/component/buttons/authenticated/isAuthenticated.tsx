'use client'

import { ButtonUser } from "@/component/buttons/user/button";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import * as Styled from './style'
import { useAuth } from "@/redux/service/login";
import { logout } from "@/redux/auth/authSlice";
import { CgLogOut, CgProfile } from 'react-icons/cg'
import { BiLogIn, BiRegistered } from 'react-icons/bi'

export function ButtonAuthenticated() {
    const userToken = useSelector((state: RootState) => state.rootReducer.auth.user?.user_token)

    const dispatch = useDispatch()
    const { handleLogout } = useAuth()

    function doLogout() {
        dispatch(logout())
        handleLogout()
    }

    if (userToken === undefined) {
        return (
            <Styled.ButtonsContainer>
                <Styled.Buttons>
                    <Styled.IconContainer>
                        <BiLogIn size={20} />
                    </Styled.IconContainer>
                    <ButtonUser text='Login' path='/login' />
                </Styled.Buttons>
                <Styled.LineButtons />
                <Styled.Buttons>
                    <Styled.IconContainer>
                        <BiRegistered size={20} />
                    </Styled.IconContainer>
                    <ButtonUser text='Register' path='/register' />
                </Styled.Buttons>
            </Styled.ButtonsContainer>
        )
    } else {
        return (
            <Styled.ButtonsContainer>
                <Styled.Buttons>
                    <Styled.IconContainer>
                        <CgProfile />
                    </Styled.IconContainer>
                    <ButtonUser text='Profile' path='/user/profile' />
                </Styled.Buttons>
                <Styled.LineButtons />
                <Styled.Buttons>
                    <Styled.IconContainer>
                        <CgLogOut size={20}/>
                    </Styled.IconContainer>
                    <Styled.ButtonLogout onClick={() => doLogout()}>
                        Logout
                    </Styled.ButtonLogout>
                </Styled.Buttons>
            </Styled.ButtonsContainer>
        )
    }
}