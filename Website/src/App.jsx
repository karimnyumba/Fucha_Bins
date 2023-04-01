import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Footer from './components/Footer'
import Fuchabins from './components/Fuchabins'
import Home from './components/Home'
import Impact from './components/Impact'
import LearnMore from './components/LearnMore'
import Market from './components/Market'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
     <Navbar/>
     <Routes>
      <Route path='/' element ={<Fuchabins/>} />
      <Route path='/learnmore' element ={ <LearnMore/>} />
     </Routes>
    
   
    </div>
  )
}

export default App
