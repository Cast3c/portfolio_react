// src/App.jsx
import React from 'react'
import Header from '../src/components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills /> 
      <Work />
      {/* <Testimonial /> */}
      <Contact />
      <Footer /> 
    </>
  )
}

export default App

