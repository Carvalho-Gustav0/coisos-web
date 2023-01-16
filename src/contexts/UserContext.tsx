import { createContext, ReactNode, useState } from "react";

interface UserContextPropsType {
    props: ReactNode;
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
}

export const UserContext = createContext<UserContextType>(initialValue)

export function UserContextProvider({props}: UserContextPropsType ) {

    const [ userName, setUserName ] = useState<string>(initialValue.userName)
    const [ userIdentifier, setUserIdentifier ] = useState<string>(initialValue.userIdentifier)
    const [ userPassword, setUserPassword ] = useState<string>(initialValue.userPassword)
    const [ userToken, setUserToken ] = useState<string>(initialValue.userToken)

    return (
        <UserContext.Provider value={{userName, setUserName, userIdentifier, setUserIdentifier,
         userPassword, setUserPassword, userToken, setUserToken}}>
            {props}
        </UserContext.Provider>
    )
}