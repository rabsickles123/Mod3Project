import { useEffect, useState } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom"
import Homepage from './pages/Homepage'
import Navbar from './Components/Navbar'
import Weather from './pages/Weather'
import DiaryEntries from './pages/DiaryEntriesPage'
import NewEntry from './pages/NewEntry'

function App() {




  return (
    <>
    <Navbar/>
    <div className = "App">
      <Routes>
        <Route path = "/" element = {<Homepage/>}></Route>
        <Route path = "/weather" element = {<Weather/>}></Route>
        <Route path = "/newentry" element = {<NewEntry/>}></Route>
        <Route path = "/diary" element = {<DiaryEntries/>}></Route>
      </Routes>
    </div>
    </>
  )
}


export default App
