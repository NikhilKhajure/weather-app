import React from 'react'
import './App.css'
import NewsDataProvide from './NewData'
import Home from './Components/Home'

function App() {
  return (
    <>
      <NewsDataProvide>
        <Home />
      </NewsDataProvide>
    </>
  )
}

export default App
