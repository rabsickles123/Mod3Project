import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import {Navigate, Route, Routes} from "react-router-dom"
import Homepage from './pages/Homepage'
import Navbar from './Components/Navbar'
import WeatherPage from './pages/WeatherPage'
import DiaryPage from './pages/DiaryPage'
import NewEntryPage from './pages/NewEntryPage'
import DiaryEntryPage from './pages/DiaryEntryPage'
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

function App() {
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  async function getUser(token) {
      try {
          const response = await axios.get('/api/users', {
              headers: {
                  Authorization: token
              }
          })
          setUser(response.data)
      } catch(err) {
          console.log(err)
          localStorage.removeItem("token")
      }
      setIsLoading(false)
  }

  useEffect(() => {

      const token = localStorage.getItem("token")

      if (token) {
          // get user info
          getUser(token)
      } else {
          setIsLoading(false)
      }

  }, [])

  let loggedIn = user.username




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
        <Route path="/" element={<Home />} />
                {loggedIn ? 
                    <>
                        <Route path="/profile" element={<Profile username={user.username} email={user.email} />} />
                        {!isLoading && <Route path="*" element={<Navigate to="/" />} />}
                    </>
                    :
                    <>
                        <Route path="/login" element={<Login setUser={setUser} />} />
                        <Route path="/register" element={<Register setUser={setUser} />} />
                        {!isLoading && <Route path="*" element={<Navigate to="/login" />} />}
                    </>
                }
      </Routes>
    </div>
    </>
  )
}


export default App
