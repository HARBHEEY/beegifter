
import './App.css'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'

import Features from './Components/Features'
import Contact from './Components/Contact'
import FAQ from './Components/FAQ'
import Aboutus from './Components/Aboutus'
import Home from './Components/Home'

function App() {
  AOS.init();

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
