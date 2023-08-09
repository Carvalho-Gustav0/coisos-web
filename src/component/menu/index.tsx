import * as Styled from './style'
import { ItemMenu } from "./items"
import { getAuthToken } from '@/redux/auth/cookies/cookies'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { useAuth } from '@/redux/service/login'
import { logout } from '@/redux/auth/authSlice'
import { FaUserCircle } from 'react-icons/fa'
import { useEffect, useState } from 'react'

export function MenuApp() {
    const items = [{ path: '/', name: 'Home' }, { path: '/rpg', name: 'Rpg' }, { path: '/archives', name: 'Archives' }]

    const route = useRouter()
    const dispatch = useDispatch()

    const [isCLient, setIsClient] = useState<boolean>(false)
    const [showContainerUser, setShowContainerUser] = useState<boolean>(false)

    function handleLogout() {
        dispatch(logout())
        useAuth().handleLogout()
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
                !getAuthToken() ? (
                    <Styled.UserContainer>
                        <Styled.ProfileContainer onClick={() => setShowContainerUser(!showContainerUser)}>
                            <FaUserCircle size={50} />
                            {showContainerUser && (
                                <Styled.Dropdown>
                                    <div className='arrow-border'></div>
                                    <Styled.ButtonUser onClick={() => route.push('/login')}>
                                        Login
                                    </Styled.ButtonUser>
                                    <Styled.ButtonUser onClick={() => route.push('/register')}>
                                        Register
                                    </Styled.ButtonUser>
                                </Styled.Dropdown>
                            )}
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
                            {showContainerUser && (
                                <Styled.Dropdown>
                                    <div className='arrow-border'></div>
                                    <Styled.ButtonUser onClick={() => route.push('/profile')}>
                                        Profile
                                    </Styled.ButtonUser>
                                    <Styled.ButtonUser onClick={() => handleLogout()}>
                                        Logout
                                    </Styled.ButtonUser>
                                </Styled.Dropdown>
                            )}
                        </Styled.ProfileContainer>
                        <Styled.ButtonsContainer>
                            <Styled.ButtonUser onClick={() => route.push('/profile')}>
                                Profile
                            </Styled.ButtonUser>
                            <Styled.ButtonUser onClick={() => handleLogout()}>
                                Logout
                            </Styled.ButtonUser>
                        </Styled.ButtonsContainer>
                    </Styled.UserContainer>
                ))
            }
        </Styled.MenuContainer >
    )
}