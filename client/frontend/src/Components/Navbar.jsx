import { Link } from 'react-router-dom'
import WeatherApp from './WeatherApp'


export default function Navbar({username, setUser}) {

    const logout = () => {
        localStorage.removeItem("token")
        setUser({})
      };
    
    return(
        <header>
            <div className = "navcontainer">
                <Link to="/weather">
                    <h2>The Weather</h2>
                </Link>
                <Link to="/newentry">
                    <h2>New Diary Entry</h2>
                </Link>
                <Link to="/diary">
                    <h2>View my diary</h2>
                </Link>
                <ul>
      <li>
        <Link to="/">
          Home
        </Link>
      </li>
      {username ? 
        <>
          <li style={{ color: "black" }}>Welcome {username}!</li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li onClick={logout}>
            <Link to="/login">Logout</Link>
          </li>
        </>
       : 
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </>
      }
    </ul>




            </div>
        </header>
    )
}