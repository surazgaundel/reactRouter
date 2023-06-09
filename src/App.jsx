import React, { Suspense } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar'
import { Home } from './components/Home'
// import { About } from './components/About'
import { Challenges } from './components/Challenges'
import { Wonderland } from './components/wonderland'
import {All} from './components/challenges/All'
import {Theory} from './components/challenges/Theory'
import {Practical} from './components/challenges/Practical'
import { UsersDetails } from './components/UsersDetails'
import { Profile } from './components/Profile'

const LazyAbout=React.lazy(()=>import('./components/About'))
function App() {

  return (
    <div className="App">
      <NavBar/>
     <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='challenges'  element={<Challenges/>}>
            <Route index  element={<All/>}/>
            <Route path='all' element={<All/>}/>
            <Route path='theory' element={<Theory/>}/>
            <Route path='practical' element={<Practical/>}/>
          </Route>
        <Route path='about'  element={<React.Suspense fallback='Loading...'><LazyAbout/></React.Suspense>}/>
        <Route path='wonderland'  element={<Wonderland/>}/>
        <Route path='profile'  element={<Profile/>}/>
        <Route path=":userID" element={<UsersDetails/>}/>
        <Route path='*'element={<h1>Oops, No page Found</h1>}/>
     </Routes>
    </div>
  )
}

export default App
