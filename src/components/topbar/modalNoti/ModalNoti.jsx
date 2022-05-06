import './modalNoti.css'
import { Favorite } from "@mui/icons-material"

function ModalNoti() {
    return (
        <div className="Modal">
            <div className="container">
                <h1 className="modal-title">Thông Báo</h1>
                <ul className="modal-list">
                    <li className="modal-item">
                        <img className="modal-img" src="./assets/person/picture-8.jpg" alt="friendimg" />
                        <Favorite className="modal-icon" />
                        <div className="modal-content">
                            <p className="modal-text"><span className="highlight">Elon Musk </span> và 1.2k người khác vừa bày tỏ cảm súc về bài viết của bạn</p>
                            <span className="modal-time">khoảng 1 giờ trước</span>
                        </div>
                    </li>
                    <li className="modal-item">
                        <img className="modal-img" src="./assets/person/picture-8.jpg" alt="friendimg" />
                        <Favorite className="modal-icon" />
                        <div className="modal-content">
                            <p className="modal-text"><span className="highlight">Elon Musk </span> và 59 người khác vừa bày tỏ cảm súc về bài viết của bạn</p>
                            <span className="modal-time">khoảng 1 giờ trước</span>
                        </div>
                    </li>
                    <li className="modal-item">
                        <img className="modal-img" src="./assets/person/picture-8.jpg" alt="friendimg" />
                        <Favorite className="modal-icon" />
                        <div className="modal-content">
                            <p className="modal-text"><span className="highlight">Elon Musk </span> và 59 người khác vừa bày tỏ cảm súc về bài viết của bạn</p>
                            <span className="modal-time">khoảng 1 giờ trước</span>
                        </div>
                    </li>
                    <li className="modal-item">
                        <img className="modal-img" src="./assets/person/picture-8.jpg" alt="friendimg" />
                        <Favorite className="modal-icon" />
                        <div className="modal-content">
                            <p className="modal-text"><span className="highlight">Elon Musk </span> và 59 người khác vừa bày tỏ cảm súc về bài viết của bạn</p>
                            <span className="modal-time">khoảng 1 giờ trước</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ModalNoti