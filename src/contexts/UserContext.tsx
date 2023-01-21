import { createContext, ReactNode,useState } from "react";
import api from "../services/api";

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
    loginOrRegister: (titleContainer?: string) => void,
}

const initialValue = {
    name: '',
    setName: () => {},
    identifier: '',
    setIdentifier: () => {},
    password: '',
    setPassword: () => {},
    userToken: '',
    setUserToken: () => {},
    user: {
        id: '',
        name: '',
        identifier: '',
        token: '',
    },
    setUser: () => {},
    message: '',
    setMessage: () => {},
    loginOrRegister: () => {},
}

export const UserContext = createContext<UserContextType>(initialValue)

export const UserContextProvider = ({children}: UserContextPropsType ) => {
    const [ name, setName ] = useState<string>(initialValue.name)
    const [ identifier, setIdentifier ] = useState<string>(initialValue.identifier)
    const [ password, setPassword ] = useState<string>(initialValue.password)
    const [ userToken, setUserToken ] = useState<string>(initialValue.userToken)
    const [ user, setUser ] = useState<UserType>(initialValue.user)
    const [ message, setMessage ] = useState<string>(initialValue.message)

    const loginOrRegister = (titleContainer?: string) => {
        if (titleContainer === 'Login') {
            api.post('users/login', {identifier, password}).then((response) => {
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
                setMessage(error.response.data.error)
            })
        } else {
            api.post('users/register', {name, identifier, password}).then((response) => {
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
                setMessage(error.response.data.error)
            })
        }
    }

    return (
        <UserContext.Provider value={{name, setName, identifier, setIdentifier,
            password, setPassword, userToken, setUserToken, user, setUser, message, setMessage,
         loginOrRegister}}>
            {children}
        </UserContext.Provider>
    )
}