import { Link } from 'react-router-dom'

export default function Navbar() {
    return(
        <header>
            <div className = "container">
                <Link to="/">
                    <h2>The weather</h2>
                </Link>
            </div>
        </header>
    )
}