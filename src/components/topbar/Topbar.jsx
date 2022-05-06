import { useState } from 'react'
import {useNavigate} from 'react-router-dom' 
import './topbar.css'
import { Search, Notifications, Chat, Person } from "@mui/icons-material"
import ModalNoti from './modalNoti/ModalNoti'
import ModalFriend from './modalFriend/ModalFriend'



function Topbar() {
    const [isActived, setIsActived] = useState(false)
    let navigate = useNavigate()
 
    return (
        
        <div className='topbar-container'>
            <div className="topbar-left">
                <span onClick={() => navigate(-1)} className='topbar-logo'>Nightbook</span>
            </div>
            <div className="topbar-center">
                <div className="search-container">
                    <Search className="search-icon" />
                    <input className="search-input" placeholder='Tìm kiếm tại đây...'></input>
                </div>
            </div>
            <div className="topbar-right">
                <div className="topbar-links">
                    <span  onClick={() => navigate("/home")} className="topbar-link">Home</span>
                    <span  onClick={() => navigate("/profile")} className="topbar-link">Profile</span>
                </div>
                <div className="topbar-notis">
                    <div className="topbar-noti">
                        <Person className="topbar-noti-icon" />
                        <span className="topbar-number">1</span>
                    </div>
                    <div className="topbar-noti">
                        <Chat className="topbar-noti-icon" />
                        <span className="topbar-number">1</span>
                    </div>
                    <div className="topbar-noti">
                        <Notifications onClick={() => setIsActived(!isActived)} className="topbar-noti-icon" />
                        <span className="topbar-number">1</span>
                    </div>
                    <img onClick={() => navigate("/profile")} src="./assets/posts/pic2.jpg" className="topbar-avatar" />
                </div>
                    <span onClick={() => navigate("/mobieNavbar") }className='topbar-nav'>☰</span>
            </div>
            
            {isActived === true &&
                <ModalNoti />
            }
        </div>
    )
}

export default Topbar