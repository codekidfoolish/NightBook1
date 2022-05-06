import './modalFriend.css'


function ModalFriend() {
    return (
        <div className="Modal">
            <div className="container">
                <h1 className="modal-title">Lời mời kết bạn</h1>
                <ul className="modal-list">
                    <li className="modal-item">
                        <img className="modal-img" src="./assets/person/picture-8.jpg" alt="friendimg" />
                        <div className="modal-content">
                            <p className="modal-text"><span className="highlight">Jack 5tr</span> đã gửi cho bạn một lời mời kết bạn</p>
                            <span className="modal-time">1 ngày trước</span>
                        </div>
                        <div className="modal-btn-wrap">
                            <button className="modal-btn">Đồng ý</button>
                            <button className="modal-btn">Từ chối</button>  
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ModalFriend