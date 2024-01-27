import { useEffect, useState } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom"
import Homepage from './pages/Homepage'
import Navbar from './Components/Navbar'

function App() {




  return (
    <>
    <Navbar/>
    <div className = "App">
      <Routes>
        <Route path = "/" element = {<Homepage/>}></Route>
      </Routes>
    </div>
    </>
  )
}


export default App
