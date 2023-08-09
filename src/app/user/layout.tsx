import { ProvidersStore } from '@/redux/provider'
import type { Metadata } from 'next'
import ProtectedPage from '@/redux/auth/ProtectedRoute'

export const metadata: Metadata = {
    title: 'Coisos',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ProvidersStore>
            <ProtectedPage>
                {children}
            </ProtectedPage>
        </ProvidersStore >
    )
}
