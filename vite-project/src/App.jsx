import React from 'react'
import Demo from './Demo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import Notfound from './Notfound'
import Home from './pages/Home'



function App() {
  return (
    <div>
    
     <BrowserRouter>
     <Navigation/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>

      <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Notfound/>}/>
     </Routes>
     </BrowserRouter>
     </div>
  )
}

export default App
