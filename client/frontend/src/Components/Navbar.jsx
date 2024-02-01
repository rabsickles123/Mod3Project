import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ username, setUser }) {
  const logout = () => {
    localStorage.removeItem("token");
    setUser({});
  };

  return (
    <header>
      
        <div className = "diary-links">
        <Link className= "link1" to="/weather">
          <h3>Get The Weather</h3>
        </Link>
        <Link className= "link1" to="/newentry">
          <h3>Create Diary Entry</h3>
        </Link>
        <Link className= "link1" to="/diary">
          <h3>View Your Diary</h3>
        </Link>
        </div>
        <div className="profile-links">
          <Link className= "link2" to="/">Home</Link>
          <br /> <br />
          {username ? (
            <>
              {/* <li style={{ color: "black" }}>Welcome {username}!</li> */}
              <Link className= "link2" to="/profile">Profile</Link>
              <br /> <br />
              <div onClick={logout}>
                <Link className= "link2" to="/login">Logout</Link> <br /> <br />
              </div>
              <br /> <br />
            </>
          ) : (
            <>
              <Link className= "link2" to="/login">Login</Link> <br /> <br />
              <Link className= "link2" to="/register">Register</Link>
            </>
          )}
        </div>
     
    </header>
  );
}
