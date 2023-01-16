import * as Styled from './style'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from "./pages/home"
import Rpg from "./pages/rpg";
import ItemMenu from './components/menu/items';

export default function App() {
  return (
    <Styled.App>
      <BrowserRouter>
        
        <Styled.Container>
          <Styled.Header>
              <Link to={'/'} style={{ textDecoration: 'none' }}>
                <Styled.Title>
                  Coisos
                </Styled.Title>
              </Link>
          </Styled.Header>
          
          <Styled.Menu>
                <ItemMenu path={'/home'} name={'Home'}/>
                <ItemMenu path={'/rpg'} name={'Rpg'}/>
                <ItemMenu path={'/arquivos'} name={'Arquivos'}/>
          </Styled.Menu>
        </Styled.Container>

        <Routes>
          {["/home", "/"].map((value, index) => 
            <Route key={index} path={value} element={<Home />}/>
          )}
          <Route path="/rpg" element={<Rpg />} />
        </Routes>

      </BrowserRouter>
    </Styled.App>
  )
}
