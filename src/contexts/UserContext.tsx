import { createContext, ReactNode,useState } from "react";

interface UserContextPropsType {
    children: ReactNode;
}

interface UserType {
    name: string;
    identifier: string;
    password: string;
}

interface UserContextType {
    userName: string,
    setUserName: (newState: string) => void,
    userIdentifier: string,
    setUserIdentifier: (newState: string) => void,
    userPassword: string,
    setUserPassword: (newState: string) => void,
    userToken: string,
    setUserToken: (newState: string) => void,
    user: UserType,
    setUser: (newState: UserType) => void,
}

const initialValue = {
    userName: '',
    setUserName: () => {},
    userIdentifier: '',
    setUserIdentifier: () => {},
    userPassword: '',
    setUserPassword: () => {},
    userToken: '',
    setUserToken: () => {},
    user: {
        name: '',
        identifier: '',
        password: '',
    },
    setUser: () => {},
}

export const UserContext = createContext<UserContextType>(initialValue)

export const UserContextProvider = ({children}: UserContextPropsType ) => {
    const [ userName, setUserName ] = useState<string>(initialValue.userName)
    const [ userIdentifier, setUserIdentifier ] = useState<string>(initialValue.userIdentifier)
    const [ userPassword, setUserPassword ] = useState<string>(initialValue.userPassword)
    const [ userToken, setUserToken ] = useState<string>(initialValue.userToken)
    const [ user, setUser ] = useState<UserType>(initialValue.user)

    return (
        <UserContext.Provider value={{userName, setUserName, userIdentifier, setUserIdentifier,
         userPassword, setUserPassword, userToken, setUserToken, user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}