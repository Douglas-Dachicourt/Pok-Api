import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './assets/components/Header'
import Footer from './assets/Footer'
import './App.css'
import Home from './pages/Home'
import PokemonList from './pages/PokemonList'
import PokemonInfo from './pages/PokemonInfo'

function App() {
 

  return (
    <>
     
<Router>
    <Header/>
  <Routes>
    <Route path='/home/' element={<Home/>}/>
    <Route path="/pokemon/" element={<PokemonList/>}/>
    <Route path='/pokemon/:name' element={<PokemonInfo/>}/>
  </Routes>
  <Footer/>
</Router>



    </>
  )
}

export default App
