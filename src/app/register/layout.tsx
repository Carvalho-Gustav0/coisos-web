import { ProvidersStore } from '@/redux/provider'
import type { Metadata } from 'next'
import GlobalStyle from '../styles/global'
import UserThemeProvider from '../styles/themes/ThemeProvider'

export const metadata: Metadata = {
    title: 'Coisos | Register',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ProvidersStore>
            <GlobalStyle />
            <UserThemeProvider>
                {children}
            </UserThemeProvider>
        </ProvidersStore >
    )
}
