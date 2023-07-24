import { createContext, ReactNode, useEffect, useState } from "react";
import { getAuthToken, setAuthToken, removeAuthToken } from "../components/utils/cookies";
import { api } from "../services/api";

interface UserContextPropsType {
    children: ReactNode;
}

interface UserType {
    name: string;
    email: string;
    cpf: string;
}

interface LoginResponse {
    id_user: string;
    name: string;
    user_token: string;
    email: string;
    cpf: string;
}

interface UserContextType {
    name: string,
    setName: (newState: string) => void,
    email: string,
    setEmail: (newState: string) => void,
    password: string,
    setPassword: (newState: string) => void,
    cpf: string,
    setCPF: (newState: string) => void,
    user: UserType,
    setUser: (newState: UserType) => void,
    dismissLayoutLogin: boolean,
    setDismissLayoutLogin: (newState: boolean) => void,
    login: () => void,
    register: () => void,
    logout: () => void,
    messageLogin: string,
    setMessageLogin: (newState: string) => void,
}

const initialValue = {
    name: '',
    setName: () => { },
    email: '',
    setEmail: () => { },
    password: '',
    setPassword: () => { },
    cpf: '',
    setCPF: () => { },
    user: {
        id_user: '',
        name: '',
        email: '',
        cpf: '',
    },
    setUser: () => { },
    dismissLayoutLogin: false,
    setDismissLayoutLogin: () => { },
    login: () => { },
    register: () => { },
    logout: () => { },
    messageLogin: '',
    setMessageLogin: () => { }
}

export const UserContext = createContext<UserContextType>(initialValue)

export const UserContextProvider = ({ children }: UserContextPropsType) => {
    const [name, setName] = useState<string>(initialValue.name)
    const [messageLogin, setMessageLogin] = useState<string>(initialValue.messageLogin)
    const [email, setEmail] = useState<string>(initialValue.email)
    const [cpf, setCPF] = useState<string>(initialValue.email)
    const [password, setPassword] = useState<string>(initialValue.password)
    const [user, setUser] = useState<UserType>(initialValue.user)
    const [dismissLayoutLogin, setDismissLayoutLogin] = useState<boolean>(initialValue.dismissLayoutLogin)

    async function login() {
        await api.post('user/login', { email, password }).then((response) => {
            const data = response.data as LoginResponse;
            const user = {
                id_user: data.id_user,
                name: data.name,
                email: data.email,
                cpf: data.cpf,
            };
            setUser(user)
            setAuthToken(data.user_token)
            setMessageLogin('Successful login')
        }).catch((error) => {
            setMessageLogin(error.response.data.message)
            return error;
        });
    }

    async function register() {
        await api.post('user/create', { name, cpf, email, password }).then(() => {
            setMessageLogin('Successful register')
        }).catch((error) => {
            setMessageLogin(error.response.data.message)
            return error
        })
    }

    async function logout() {
        removeAuthToken();
        window.location.reload()
    }

    useEffect(() => {
        const token = getAuthToken();
        if (token) {
            api.post('user/login', { token }).then((response) => {
                const data = response.data.user as LoginResponse;
                const user = {
                    id_user: data.id_user,
                    name: data.name,
                    email: data.email,
                    cpf: data.cpf,
                };
                setUser(user);
            }).catch((error) => {
                setMessageLogin(error.response.data.message);
            });
        }
    }, []);

    return (
        <UserContext.Provider value={{
            name, setName, email, setEmail, cpf, setCPF,
            password, setPassword, user, setUser,
            dismissLayoutLogin, setDismissLayoutLogin, login, register, logout, messageLogin, setMessageLogin,
        }}>
            {children}
        </UserContext.Provider>
    )
}