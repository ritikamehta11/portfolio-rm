import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.s vg'
import './App.css'
import { Hero } from './components/Hero/Hero'
import { Skills } from './components/Skills/Skills'
import { Project } from './components/Projects/Project'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'

function App() {


  return (
    <>
      <Hero />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
