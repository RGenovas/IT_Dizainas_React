
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Pranesimas from './pages/Pranesimas'
import Footer from './components/Footer'
import Pradinis from './pages/Pradinis'
import Apiemus from './pages/Apiemus'
import Portfelis from './pages/Portfelis'
import Kontaktai from './pages/Kontaktai'
import Susisiekite from './pages/Susisiekite'
import PortfelioDarbas2 from './pages/PortfelioDarbas2'
import Klaida from './pages/Klaida'


function App() {


  return (
    <>
    <Router>
    <Routes>
    <Route path='/' element={<Pradinis/>}/>
    <Route path='/apiemus' element={<Apiemus/>}/>
    <Route path='/portfelis' element={<Portfelis/>}/>
    <Route path='/kontaktai' element={<Kontaktai/>}/>
    <Route path='/susisiekite' element={<Susisiekite/>}/>
    <Route path='/portfelis/darbas2' element={<PortfelioDarbas2/>}/>
    <Route path='/pranesimas' element={<Pranesimas/>}/>
    <Route path='*' element={<Klaida/>}/>

    </Routes>
   <Footer/>
    </Router> 
    </>
  )
}

export default App
