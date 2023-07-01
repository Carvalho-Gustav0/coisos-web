import * as Styled from './style'
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { Rpg } from "./pages/rpg";
import { UserContextProvider } from './contexts/UserContext'
import { Archives } from './pages/archives'
import { Header } from './components/header'
import { ModalProvider } from 'styled-react-modal'

export function App() {

  return (
    <UserContextProvider>
      <ModalProvider>
        <Styled.App>
          <Header />

          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/rpg" element={<Rpg />} />
            <Route path="/arquivos" element={<Archives />} />
            <Route path="*" element={<>Página não encontrada</>} />
          </Routes>
        </Styled.App>
      </ModalProvider>
    </UserContextProvider >
  )
}
