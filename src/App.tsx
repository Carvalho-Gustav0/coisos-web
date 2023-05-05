import * as Styled from './style'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from "./pages/home"
import { Rpg } from "./pages/rpg";
import { ItemMenu } from './components/menu/items';
import { UserContextProvider } from './contexts/UserContext';
import { Archives } from './pages/archives';
import { Header } from './components/header';

export function App() {

  return (
    <UserContextProvider>
      <BrowserRouter>
        <Styled.App>

          <Header />

          <Styled.ContainerMenu>
            <Styled.Menu>
              <ItemMenu path={'/home'} name={'Home'} />
              <ItemMenu path={'/rpg'} name={'Rpg'} />
              <ItemMenu path={'/arquivos'} name={'Arquivos'} />
            </Styled.Menu>

          </Styled.ContainerMenu>

          <Styled.Container>
            <Routes>
              {["/home", "/"].map((value, index) =>
                <Route key={index} path={value} element={<Home />} />
              )}
              <Route path="/rpg" element={<Rpg />} />
              <Route path="/arquivos" element={<Archives />} />
              <Route path="*" element={<>Página não encontrada</>} />
            </Routes>

          </Styled.Container>

        </Styled.App>
      </BrowserRouter>
    </UserContextProvider >
  )
}
