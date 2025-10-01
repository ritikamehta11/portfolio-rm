import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hero } from './components/Hero/Hero'
import { Skills } from './components/Skills/Skills'

function App() {


  return (
    <>
      <Hero />
      <Skills/>
    </>
  )
}

export default App
