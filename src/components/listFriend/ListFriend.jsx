import './listFriend.css'

function ListFriend({ user }) {
    return (
        <li className="profile-friend-item">
            <img className="profile-friend-img" src={user.profilePicture} alt="friendimg" />
            <span className="profile-friend-name">{user.username}</span>
        </li>
    )
}

export default ListFriend