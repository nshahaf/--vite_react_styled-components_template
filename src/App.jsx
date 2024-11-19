// import reactLogo from './assets/icons/react.svg'
// import viteLogo from '/vite.svg'
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';

import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

function NotFoundPage() {
  return <HomePage/>;
}

export default App
