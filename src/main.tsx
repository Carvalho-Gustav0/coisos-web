import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/global'
import { App } from './App'
import { ThemeProvider } from 'styled-components'
import { MainTheme } from './styles/themes/theme'
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={MainTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
