import { useState ,useEffect} from 'react'
import './App.css'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Footer from './Footer'

import Navbar from './Navbar'
function App() {
  useEffect( () => {
    if(!localStorage.getItem('auth')) 
      window.location.href = '/';
  },[])
  
  return (
    <>
      <Navbar />
      <Page1 />
      <Page2 />
      <Page3 />
      <Footer />
    </>
  )
}

export default App