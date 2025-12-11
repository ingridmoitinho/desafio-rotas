import { BrowserRouter, Route, Routes } from "react-router-dom"
import './globalStyle.scss'
import Header from './components/header/Header'
import Home from  './pages/home/Home'
import Voluntario from './pages/voluntario/Voluntario'

function App() {

  return (
    <>
   <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/voluntario' element={<Voluntario />} />
    </Routes>   
   </BrowserRouter>        
    </>
  )
}

export default App
