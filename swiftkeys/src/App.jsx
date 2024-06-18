import React from 'react'
import { useState } from 'react'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Words from './components/Words/Words'
import './App.css'

function App() {

  return (
    <>
    <div className="Main-container">
      <Header />
      <Menu />
      <Words/>
    </div>
    </>
  )
}

export default App
