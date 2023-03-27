import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar'
import { Home } from './components/Home'
import { About } from './components/About'
import { Challenges } from './components/Challenges'

function App() {

  return (
    <div className="App">
      <NavBar/>
     <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/challenges' exact element={<Challenges/>}/>
        <Route path='/about' exact element={<About/>}/>
     </Routes>
    </div>
  )
}

export default App
