import "./ProfilePage.css"

export default function Profile({ username, email }) {
    return ( 
        <div className="profile-page">
            <div className = "profile-container2">
                <h1 className = "profile-title">Profile</h1>
                <h3 className = "username">Welcome to your weather diary, {username}!</h3>
                <p className = "username">Get the weather, write out your thoughts, or delete, update, edit previous thoughts.
                </p>
                <h3 className = "username">username: {username}</h3>
                <h3 className = "username">email: {email}</h3>
            </div>
        </div>
        
     );
}