import { Link } from 'react-router-dom'
import WeatherApp from './WeatherApp'

export default function Navbar() {
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
                    <h2>Diary</h2>
                </Link>
            </div>
        </header>
    )
}