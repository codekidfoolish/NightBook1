import './profile.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import { useEffect, useState } from 'react'
import { Avatar } from '@mui/material'



function Profile() {
    const [avatar, setAvatar] = useState()
    useEffect(() => {
        //cleamup
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const handleAvatar = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }

    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profile-right">
                    <div className="profile-right-top">
                        <div className="profile-cover">
                            <img src="./assets/posts/pic1.jpg" alt=""
                                className='profile-picture-cover'
                            />
                            <img src="./assets/posts/pic2.jpg" alt=""
                                className='profile-picture-user'
                            />
                            {avatar &&
                                <img src={avatar.preview} alt=""
                                    className='profile-picture-user'
                                />
                            }
                            <input onChange={handleAvatar} type="file" className='profile-picture-btn' />
                        </div>
                        <div className="profile-user">
                            <h3 className="profile-user-name">Le Hoang Quan</h3>
                            <span className='profile-user-desc'>(Soái ca hảo ngọt)</span>
                        </div>
                    </div>
                    <div className="profile-right-bottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile