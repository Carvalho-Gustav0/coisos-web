import { api } from '../api';
import { removeAuthToken, setAuthToken } from '@/redux/auth/cookies/cookies';

interface UserType {
    id_user: string;
    name: string;
    user_token: string;
    email: string;
    cpf: string;
}

export function useAuth() {
    async function handleLogin(email: string, password: string): Promise<UserType> {
        const response = await api.post('user/login', { email, password })

        if (response.status >= 200 && response.status < 300) {
            const user = response.data as UserType;
            setAuthToken(user.user_token)
            return user
        } else {
            throw Error
        }
    }

    async function handleRegister(name: string, cpf: string, email: string, password: string) {
        const response = await api.post('user/create', { name, cpf, email, password })

        if (response.status >= 200 && response.status < 300) {
            return true
        } else {
            throw Error
        }
    }

    async function handleLogout() {
        removeAuthToken();
    }

    return { handleLogin, handleRegister, handleLogout };
}