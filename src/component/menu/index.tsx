import * as Styled from './style'
import { ItemMenu } from "./items"
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth } from '@/redux/service/login'
import { logout } from '@/redux/auth/authSlice'
import { FaUserCircle } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { RootState } from '@/redux/store'

export function MenuApp() {
    const items = [{ path: '/home', name: 'Home' }, { path: '/rpg', name: 'Rpg' }, { path: '/archives', name: 'Archives' }]
    const isAuthenticated = useSelector((state: RootState) => state.rootReducer.auth.user?.user_token)

    const route = useRouter()
    const dispatch = useDispatch()
    const { handleLogout } = useAuth()

    const [isCLient, setIsClient] = useState<boolean>(false)
    const [showContainerUser, setShowContainerUser] = useState<boolean>(false)

    function doLogout() {
        dispatch(logout())
        handleLogout()
    }

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <Styled.MenuContainer>
            <Styled.ItemsMenu>
                {items.map((value, index) => (
                    <ItemMenu key={index} path={value.path} name={value.name} />
                ))}
            </Styled.ItemsMenu>
            {isCLient && (
                isAuthenticated === undefined ? (
                    <Styled.UserContainer>
                        <Styled.ProfileContainer onClick={() => setShowContainerUser(!showContainerUser)}>
                            <FaUserCircle size={50} />
                            {isCLient && (
                                showContainerUser && (
                                    <Styled.Dropdown suppressHydrationWarning>
                                        <div className='arrow-border'></div>
                                        <Styled.ButtonUser onClick={() => route.push('/login')}>
                                            Login
                                        </Styled.ButtonUser>
                                        <Styled.ButtonUser onClick={() => route.push('/register')}>
                                            Register
                                        </Styled.ButtonUser>
                                    </Styled.Dropdown>
                                ))}
                        </Styled.ProfileContainer>
                        <Styled.ButtonsContainer>
                            <Styled.ButtonUser onClick={() => route.push('/login')}>
                                Login
                            </Styled.ButtonUser>
                            <Styled.ButtonUser onClick={() => route.push('/register')}>
                                Register
                            </Styled.ButtonUser>
                        </Styled.ButtonsContainer>
                    </Styled.UserContainer >
                ) : (
                    <Styled.UserContainer>
                        <Styled.ProfileContainer onClick={() => setShowContainerUser(!showContainerUser)}>
                            <FaUserCircle size={50} />
                            {isCLient && (
                                showContainerUser && (
                                    <Styled.Dropdown>
                                        <div className='arrow-border'></div>
                                        <Styled.ButtonUser onClick={() => route.push('/user/profile')}>
                                            Profile
                                        </Styled.ButtonUser>
                                        <Styled.ButtonUser onClick={() => doLogout()}>
                                            Logout
                                        </Styled.ButtonUser>
                                    </Styled.Dropdown>
                                ))}
                        </Styled.ProfileContainer>
                        <Styled.ButtonsContainer>
                            <Styled.ButtonUser onClick={() => route.push('/user/profile')}>
                                Profile
                            </Styled.ButtonUser>
                            <Styled.ButtonUser onClick={() => doLogout()}>
                                Logout
                            </Styled.ButtonUser>
                        </Styled.ButtonsContainer>
                    </Styled.UserContainer>
                ))
            }
        </Styled.MenuContainer >
    )
}