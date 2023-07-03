import * as Styled from './style'
import { UserContextProvider } from './contexts/UserContext'
import { Header } from './components/header'
import { ModalProvider } from 'styled-react-modal'
import { AppRoutes } from './components/routes';

export function App() {

  return (
    <UserContextProvider>
      <ModalProvider>
        <Styled.App>
          <Header />

          <AppRoutes />
        </Styled.App>
      </ModalProvider>
    </UserContextProvider >
  )
}
