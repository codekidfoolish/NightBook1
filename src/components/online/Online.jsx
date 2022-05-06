import './online.css'

function Online({user}) {
    return (
        <li className="rightbar-friend">
            <img className="rightbar-img" src={user.profilePicture} alt="friendimg" />
            <span className="rightbar-text">{user.username}</span>
        </li>
    )
}

export default Online