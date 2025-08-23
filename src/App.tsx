import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CounterPage from "./pages/CounterPage"
import HomePage from './pages/HomePage'
import PageLayout from './components/PageLayout'

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout><HomePage /></PageLayout>} path="/" />
        <Route element={<PageLayout><CounterPage /></PageLayout>} path="/counter" />
      </Routes>
    </BrowserRouter>
  )
}

export default App

