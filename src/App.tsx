import { ThemeProvider } from 'styled-components'
import { Header } from './Components/Header'
// import { Home } from './pages/Home'
import { PostPage } from './pages/PostPage'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <PostPage />
      <GlobalStyle />
    </ThemeProvider>
  )
}
