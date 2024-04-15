import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'

import Showcase from './pages/Showcase.jsx'
import { Route, Router, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Booking1 from './pages/Booking1.jsx'
import Page1 from './pages/Page1.jsx'
import Getdetails from './pages/getdetails.jsx'
import Booking2 from './pages/Booking2.jsx'
import Booking3 from './pages/Booking3.jsx'
import Booking4 from './pages/Booking4.jsx'
import Booking5 from './pages/Booking5.jsx'
import Booking6 from './pages/Booking6.jsx'
import Booking7 from './pages/Booking7.jsx'
import Booking8 from './pages/Booking8.jsx'
import Booking9 from './pages/Booking9.jsx'
import Booking10 from './pages/Booking10.jsx'
import Review from './pages/Review.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>

    <Route path='/' element= {<Login/>} />
    <Route path='/signup' element= {<Signup/>} />
    
    <Route path='/dashboard' element= {<App/>} />
    <Route path='/showcase' element= {<Showcase/>} />
    <Route path='/review' element= {<Review/>} />

    <Route path='/confirm-booking1' element= {<Booking1/>} />
    <Route path='/confirm-booking2' element= {<Booking2/>} />
    <Route path='/confirm-booking3' element= {<Booking3/>} />
    <Route path='/confirm-booking4' element= {<Booking4/>} />
    <Route path='/confirm-booking5' element= {<Booking5/>} />
    <Route path='/confirm-booking6' element= {<Booking6/>} />
    <Route path='/confirm-booking7' element= {<Booking7/>} />
    <Route path='/confirm-booking8' element= {<Booking8/>} />
    <Route path='/confirm-booking9' element= {<Booking9/>} />
    <Route path='/confirm-booking10' element= {<Booking10/>} />
  </Routes>
  </BrowserRouter>
)