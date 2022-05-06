import './rightbar.css'
import Online from '../online/Online'
import {LocalFireDepartment, School, LocationOn} from  "@mui/icons-material"
import { Users } from '../../dummyData'
import CloseFriend from '../closeFriend/CloseFriend'
import ListFriend from '../listFriend/ListFriend'



function Rightbar({ profile }) {

    const HomeRightbar = () => {
        return (
            <>
                <div className="rightbar-bd">
                    <img className="bd-img"
                        src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/gift.png?raw=true" alt="birtdaygift" />
                    <p className="bd-text">Hôm nay là sinh nhật của <b>Elon Musk</b> và <b>2 người khác</b></p>
                </div>
                <hr className='rightbar-hr' />
                <div className="rightbar-event">
                    <img src="https://m.media-amazon.com/images/M/MV5BYTljNjNjOTktZDlhMy00MDA1LWFiMmYtMjhiZTJjYmQwNmE5XkEyXkFqcGdeQXVyNjI1NDcyNDM@._V1_.jpg" alt=""
                        className="event-img"
                    />
                </div>
                <hr className='rightbar-hr' />
                <h2 className='rightbar-title'>Trực tuyến</h2>
                <ul className="rightbar-friend-list">
                    {
                        Users.map(u => (
                            <Online key={u.id} user={u} />
                        ))
                    }

                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
            <div className="profile-infor">
                <h1 className='friend-title'>Thông tin</h1>
                <ul className="infor-list">
                    <li className="infor-item">
                        <LocalFireDepartment className="infor-icon"/>
                        <span className="infor-desc">tình trạng hẹn hò <b>Độc thân</b></span>
                    </li>
                    <li className="infor-item">
                        <School className="infor-icon"/>
                        <span className="infor-desc">Từng học tại <b>THPT Nguyễn Trãi</b></span>
                    </li>
                    <li className="infor-item">
                        <School className="infor-icon"/>
                        <span className="infor-desc">Từng học tại <b>THCS Tăng Bạt Hổ A</b></span>
                    </li>
                    <li className="infor-item">
                        <LocationOn className="infor-icon"/>
                        <span className="infor-desc">Sống tại <b>Thành phố HCM</b></span>
                    </li>
                </ul>
                <button className="profile-infor-btn">Chỉnh sửa thông tin cá nhân</button>
            </div>
            <div className="profile-friend">
                <div className="friend_header">
                    <h1 className='friend-title'>Bạn bè</h1>
                    <span className="friend-counter">10 người bạn</span>
                </div>
                <ul className="rightbar-friendlist">
                   {
                       Users.map(u => 
                        <ListFriend key={u.id} user={u}/>
                        )
                   }
                </ul>
            </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbar-container">
              {profile ? <ProfileRightbar /> : <HomeRightbar/>}
            </div>
        </div>
    )
}

export default Rightbar