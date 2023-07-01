import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";

interface UserContextPropsType {
    children: ReactNode;
}

interface UserType {
    id: string;
    name: string;
    identifier: string;
    token: string;
}

interface LoginResponse {
    id: string;
    name: string;
    token: string;
    message: string;
    identifier: string;
}

interface UserContextType {
    name: string,
    setName: (newState: string) => void,
    identifier: string,
    setIdentifier: (newState: string) => void,
    password: string,
    setPassword: (newState: string) => void,
    userToken: string,
    setUserToken: (newState: string) => void,
    user: UserType,
    setUser: (newState: UserType) => void,
    message: string,
    setMessage: (newState: string) => void,
    dismissLayoutLogin: boolean,
    setDismissLayoutLogin: (newState: boolean) => void,
    login: () => void,
    register: () => void,
}

const initialValue = {
    name: '',
    setName: () => { },
    identifier: '',
    setIdentifier: () => { },
    password: '',
    setPassword: () => { },
    userToken: '',
    setUserToken: () => { },
    user: {
        id: '',
        name: '',
        identifier: '',
        token: '',
    },
    setUser: () => { },
    message: '',
    setMessage: () => { },
    dismissLayoutLogin: false,
    setDismissLayoutLogin: () => { },
    login: () => { },
    register: () => { },
}

export const UserContext = createContext<UserContextType>(initialValue)

export const UserContextProvider = ({ children }: UserContextPropsType) => {
    const [name, setName] = useState<string>(initialValue.name)
    const [identifier, setIdentifier] = useState<string>(initialValue.identifier)
    const [password, setPassword] = useState<string>(initialValue.password)
    const [userToken, setUserToken] = useState<string>(initialValue.userToken)
    const [user, setUser] = useState<UserType>(initialValue.user)
    const [message, setMessage] = useState<string>(initialValue.message)
    const [dismissLayoutLogin, setDismissLayoutLogin] = useState<boolean>(initialValue.dismissLayoutLogin)

    async function login() {
        await api.post('users/login', { identifier, password }).then((response) => {
            if (!response) {
                setMessage('Error on connect to server')
            } else {
                const data = response.data as LoginResponse
                const user = {
                    id: data.id,
                    name: data.name,
                    identifier: data.identifier,
                    token: data.token
                }

                setUser(user)
                setMessage(data.message)
            }
        }).catch((error) => {
            if (error.code === 'ERR_NETWORK') {
                setMessage('Error on connect to server')
            } else {
                setMessage(error.response.data.error)
            }
        })
    }

    async function register() {
        await api.post('users/register', { name, identifier, password }).then((response) => {
            const data = response.data as LoginResponse
            const user = {
                id: data.id,
                name: data.name,
                identifier: data.identifier,
                token: data.token
            }
            setUser(user)
            setMessage(data.message)
        }).catch((error) => {
            if (error.code === 'ERR_NETWORK') {
                setMessage('Error on connect to server')
            } else {
                setMessage(error.response.data.error)
            }
        })
    }

    return (
        <UserContext.Provider value={{
            name, setName, identifier, setIdentifier,
            password, setPassword, userToken, setUserToken, user, setUser, message, setMessage,
            dismissLayoutLogin, setDismissLayoutLogin, login, register
        }}>
            {children}
        </UserContext.Provider>
    )
}