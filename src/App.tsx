import React from 'react'
import Header from './components/Header'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/sass/style.scss'
import SocialMedia from './components/SocialMedia'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'

const App = () => {
  
  return (

    <BrowserRouter>


      <div className="app">
        <SocialMedia />

        <div className='container'>

          <Header />

          <div className="appBody">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/' element={<Home />} />


            </Routes>
          </div>

        </div>
      </div>
    </BrowserRouter>

  )
}


export default App;
