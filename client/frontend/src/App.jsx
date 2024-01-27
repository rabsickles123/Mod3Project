import { useEffect, useState } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom"
import Homepage from './pages/Homepage'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {

    const getData = async () => {
      const response = await fetch('/api/test')
      const data = await response.json()
      console.log(data)
    }
    getData()
    },[])

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path = "/" element = {<Homepage/>}></Route>
    </Routes>
    </>
  )
}


export default App
