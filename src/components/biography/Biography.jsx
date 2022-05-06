import './biography.css'
import {LocalFireDepartment, School, LocationOn} from  "@mui/icons-material"

function Biography() {
    return
    <>
        <div className="profile-infor">
            <h1 className='friend-title'>Thông tin</h1>
            <ul className="infor-list">
                <li className="infor-item">
                    <LocalFireDepartment className="infor-icon" />
                    <span className="infor-desc">tình trạng hẹn hò <b>Độc thân</b></span>
                </li>
                <li className="infor-item">
                    <School className="infor-icon" />
                    <span className="infor-desc">Từng học tại <b>THPT Nguyễn Trãi</b></span>
                </li>
                <li className="infor-item">
                    <School className="infor-icon" />
                    <span className="infor-desc">Từng học tại <b>THCS Tăng Bạt Hổ A</b></span>
                </li>
                <li className="infor-item">
                    <LocationOn className="infor-icon" />
                    <span className="infor-desc">Sống tại <b>Thành phố HCM</b></span>
                </li>
            </ul>
            <button className="profile-infor-btn">Chỉnh sửa thông tin cá nhân</button>
        </div>
    </>
}

export default Biography