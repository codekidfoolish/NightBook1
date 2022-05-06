import Topbar from '../../components/topbar/Topbar'
import { useNavigate } from 'react-router-dom'
import {
    RssFeed, Chat, PlayCircle, PeopleAlt, Help, PeoleAlt, EventNote, Work, School, Bookmark
} from "@mui/icons-material"
import './mobieNavbar.css'

function MobieNavbar() {
    let navigate = useNavigate()
    return (
        <>
            <Topbar />
            <div className="navbar-wrapper">
                <div onClick={() => navigate("/profile")} className="profile-link">
                    <img src="./assets/posts/pic2.jpg" alt="" className="navbar_avatar" />
                    <span> Le Hoang Quan</span>
                </div>
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
            </div>

        </>
    )
}

export default MobieNavbar