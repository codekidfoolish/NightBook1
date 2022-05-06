import './closeFriend.css'

function CloseFriend({user}) {
    return (
        <li className="sidebar-friend">
            <img className="sidebar-img" src={user.profilePicture} alt="friendimg" />
            <span className="sidebar-text">{user.username}</span>
        </li>
        
    )
}

export default CloseFriend