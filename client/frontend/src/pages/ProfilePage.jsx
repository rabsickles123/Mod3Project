import "./ProfilePage.css"

export default function Profile({ username, email }) {
    return ( 
        <div className="profile-container">
            <div>
            <h1 className = "profile-title">Profile</h1>
            <p className = "username">username: {username}</p>
            <p className = "email">email: {email}</p>
            </div>
        </div>
        
     );
}