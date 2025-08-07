import React from 'react'
import Demo from './Demo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Notfound from './Notfound'

function App() {
  return (
    <div>
    
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Demo/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<Notfound/>}/>
     </Routes>
     </BrowserRouter>
     </div>
  )
}

export default App
