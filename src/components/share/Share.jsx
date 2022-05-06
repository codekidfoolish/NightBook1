import { PhotoLibrary, GroupAdd, Mood, LocationOn } from "@mui/icons-material"
import { useState } from 'react'
import './share.css'
import Post from '../post/Post'
import NewPost from "../newPost/newPost"



function Share() {
    const [type, setType] = useState('')
    const [post, setPost] = useState([])
    const handleSubmit = () => {
        setPost(prev => [...prev, type])
        setType('')
    }

    return (
        <>
            <div className="share-container">
                <div className="share-top">
                    <img className="share-avatar" src="./assets/posts/pic2.jpg" />
                    <textarea
                        className="share-input" rows="3"
                        value={type}
                        onChange={e => setType(e.target.value)}
                        placeholder='Bạn đang muốn chia sẻ điều gì?...'
                    >

                    </textarea>
                    <button
                        onClick={handleSubmit}
                        className="share-btn"
                    >
                        ĐĂNG
                    </button>
                </div>
                <hr className="share-hr" />
                <div className="share-bottom">
                    <ul className='share-list'>
                        <li className="share-item">
                            <PhotoLibrary htmlColor="#45bd62" className="share-icon" />
                            <span className="share-icondes">Thêm ảnh</span>
                        </li>
                        <li className="share-item">
                            <GroupAdd htmlColor="#1877f2" className="share-icon" />
                            <span className="share-icondes">Gắn thẻ bạn bè</span>
                        </li>
                        <li className="share-item">
                            <Mood htmlColor="#f7b928" className="share-icon" />
                            <span className="share-icondes">Cảm xúc/Hoạt động</span>
                        </li>
                        <li className="share-item">
                            <LocationOn htmlColor="#f5533d" className="share-icon" />
                            <span className="share-icondes">Check in</span>
                        </li>
                    </ul>
                </div>
            </div>

            <ul className="user-post-list">
                {
                    post?.map((p, index) =>

                        <NewPost key={index} newPost={p} />
                    
                    )
                }
            </ul>

        </>

    )
}

export default Share