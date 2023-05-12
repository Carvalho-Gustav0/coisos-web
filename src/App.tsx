import * as Styled from './style'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from "./pages/home"
import { Rpg } from "./pages/rpg";
import { ItemMenu } from './components/menu/items';
import { UserContextProvider } from './contexts/UserContext';
import { Archives } from './pages/archives';
import { Header } from './components/header';
import { ModalProvider } from 'styled-react-modal'

import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export function App() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <UserContextProvider>
      <BrowserRouter>
        <ModalProvider>
          <Styled.App>

            <Header />

            <Styled.Container>

              <Styled.ContainerSideBar isOpen={isOpen}>
                {isOpen &&
                  <Styled.SideBar>
                    <ItemMenu path={'/home'} name={'Home'} />
                    <ItemMenu path={'/rpg'} name={'Rpg'} />
                    <ItemMenu path={'/arquivos'} name={'Arquivos'} />
                  </Styled.SideBar>
                }

                <Styled.MenuIcon onClick={() => { setIsOpen(!isOpen) }} >
                  <MenuIcon />
                </Styled.MenuIcon>
              </Styled.ContainerSideBar>

              <Styled.Content>
                <Routes>
                  {["/home", "/"].map((value, index) =>
                    <Route key={index} path={value} element={<Home />} />
                  )}
                  <Route path="/rpg" element={<Rpg />} />
                  <Route path="/arquivos" element={<Archives />} />
                  <Route path="*" element={<>Página não encontrada</>} />
                </Routes>
              </Styled.Content>
            </Styled.Container>
          </Styled.App>
        </ModalProvider>
      </BrowserRouter>
    </UserContextProvider >
  )
}
