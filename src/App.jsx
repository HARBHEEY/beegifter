import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Home from './Components/Home'
import Features from './Components/Features'
import Contact from './Components/Contact'
import FAQ from './Components/FAQ'
import Aboutus from './Components/Aboutus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'element= {<Home/>}></Route>
          <Route path='/About us'element={<Aboutus/>}></Route>
          <Route path='/Features'element={<Features/>}></Route>
          <Route path='/Contact'element={<Contact/>}></Route>
          <Route path='/FAQ'element={<FAQ/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
