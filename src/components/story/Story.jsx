import './story.css'
import { Users, Posts } from '../../dummyData'

function Story({ post }) {
    return (
        <li className="story-user">
            <img className="story-avatar"
                src={Users.filter(u => u.id === post.userId)[0].profilePicture}
                alt="" />
            <img className="story-img" src={post.photo} alt="" />
            <span className="story-name">{Users.filter(u => u.id === post.userId)[0].username}</span>
        </li>
    )
}

export default Story