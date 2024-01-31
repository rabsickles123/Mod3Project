import "./ProfilePage.css"

export default function Profile({ username, email }) {
    return ( 
        <div className="profile-container">
            <div>
                <h1 className = "profile-title">Profile</h1>
                <h3 className = "username">Welcome to your weather diary, {username}!</h3>
                <h3 className = "username">username: {username}</h3>
                <h3 className = "username">email: {email}</h3>
            </div>
        </div>
        
     );
}