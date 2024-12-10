import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CompGames from './pages/CompGames'

function App() {


  return (
    <>
    <Header/>
    {/* path for pages */}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Compgames' element={<CompGames/>} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
