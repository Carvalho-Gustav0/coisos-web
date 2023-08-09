import { ProvidersStore } from '@/redux/provider'
import GlobalStyle from './styles/global'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/component/header'
import UserThemeProvider from './styles/themes/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

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
      <GlobalStyle />
      <UserThemeProvider>
        <html lang="en">
          <body className={inter.className}>
            <Header />
            {children}
          </body>
        </html>
      </UserThemeProvider>
    </ProvidersStore >
  )
}
