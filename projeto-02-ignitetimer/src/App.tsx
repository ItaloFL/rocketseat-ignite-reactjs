import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { CyclesCountextProvider } from './contexts/CycleContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesCountextProvider>
          <Router />
        </CyclesCountextProvider>

        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
