import { useNavigate } from 'react-router-dom'
import {
    RssFeed, Chat, PlayCircle, PeopleAlt, Help, PeoleAlt, EventNote, Work, School, Bookmark
} from "@mui/icons-material"
import { Users } from '../../dummyData'
import CloseFriend from '../closeFriend/CloseFriend'
import './sidebar.css'

function Sidebar() {
    let navigate = useNavigate()

    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <ul className="sidebar-list">
                    <li onClick={() => navigate("/home")} className="sidebar-item">
                        <RssFeed className="sidebar-icon" />
                        <span className="sidebar-text">Feed</span>
                    </li>
                    <li className="sidebar-item">
                        <Chat className="sidebar-icon" />
                        <span className="sidebar-text">Chat</span>
                    </li>
                    <li className="sidebar-item">
                        <PlayCircle className="sidebar-icon" />
                        <span className="sidebar-text">Videos</span>
                    </li>
                    <li className="sidebar-item">
                        <PeopleAlt className="sidebar-icon" />
                        <span className="sidebar-text">Groups</span>
                    </li>
                    <li className="sidebar-item">
                        <Bookmark className="sidebar-icon" />
                        <span className="sidebar-text">Events</span>
                    </li>
                    <li className="sidebar-item">
                        <Help className="sidebar-icon" />
                        <span className="sidebar-text">Help</span>
                    </li>
                    <li className="sidebar-item">
                        <EventNote className="sidebar-icon" />
                        <span className="sidebar-text">Questions</span>
                    </li>
                    <li className="sidebar-item">
                        <Work className="sidebar-icon" />
                        <span className="sidebar-text">Jobs</span>
                    </li>
                    <li className="sidebar-item">
                        <School className="sidebar-icon" />
                        <span className="sidebar-text">Course</span>
                    </li>
                </ul>
                <span onClick={() => navigate("/")}
                      className="sidebar-btn">
                    ĐĂNG XUẤT
                </span>
                <hr className="sidebar-hr" />
                <h2 className="sidebar-title">Bạn bè</h2>
                <ul className="sidebar-friendlist">
                    {
                        Users.map(u =>
                            <CloseFriend key={u.id} user={u} />
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Sidebar