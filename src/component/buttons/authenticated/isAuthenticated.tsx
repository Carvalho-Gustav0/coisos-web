'use client'

import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import * as Styled from './style'
import { useAuth } from "@/redux/service/login";
import { logout } from "@/redux/auth/authSlice";
import { CgLogOut, CgProfile } from 'react-icons/cg'
import { BiLogIn, BiRegistered } from 'react-icons/bi'
import { ItemMenu } from "@/component/menu/items";

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
            <Styled.Buttons>
                <ItemMenu path='/login' name='LOGIN' icon={<BiLogIn />} />
                <Styled.LineButtons />
                <ItemMenu path='/register' name='REGISTER' icon={<BiRegistered />} />
            </Styled.Buttons>
        )
    } else {
        return (
            <Styled.Buttons>
                <ItemMenu path='/profile' name='PROFILE' icon={<CgProfile />} />
                <Styled.LineButtons />
                <ItemMenu path='/' name='LOG OUT' icon={<CgLogOut />} />
            </Styled.Buttons>
        )
    }
}