import { useEffect, useState } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom"
import Homepage from './pages/Homepage'
import Navbar from './Components/Navbar'
import WeatherPage from './pages/WeatherPage'
import DiaryPage from './pages/DiaryPage'
import NewEntryPage from './pages/NewEntryPage'
import DiaryEntryPage from './pages/DiaryEntryPage'

function App() {




  return (
    <>
    <Navbar/>
    <div className = "App">
      <Routes>
        <Route path = "/" element = {<Homepage/>}></Route>
        <Route path = "/weather" element = {<WeatherPage/>}></Route>
        <Route path = "/newentry" element = {<NewEntryPage />}></Route>
        <Route path = "/diary" element = {<DiaryPage/>}></Route>
        <Route path = "/diary/:id" element = {<DiaryEntryPage />}></Route>
      </Routes>
    </div>
    </>
  )
}


export default App
