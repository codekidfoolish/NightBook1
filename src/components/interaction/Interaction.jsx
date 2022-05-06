import './interaction.css'
import { ThumbUpOutlined, ChatBubbleOutlineOutlined, SendOutlined } from "@mui/icons-material"
import { useState } from 'react'
import Comment from '../../components/comment/Comment'


function Interaction({post}) {
    const [like, setLike] = useState(0)
    const [isLiked, setIsLiked] = useState(false)
    const [showComment, setShowComment] = useState(false)

    const handleLike = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    return (
        <>
            <div className="post-bottom">
                <div className="post-bottom-left">
                    <img src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/like.png?raw=true"
                        className="post-reaction" />
                    <img src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/heart.png?raw=true"
                        className="post-reaction" />
                    <span className='reaction-counter'>{like}</span>
                </div>
                <div className="post-bottom-right">
                    <span className="post-comment-counter"> bình luận </span>
                </div>
            </div>
            <hr className='post-hr' />
            <div className="post-interactive">
                <div onClick={handleLike} className="post-lcs">
                    <ThumbUpOutlined className={isLiked ? "post-like" : "inter-icon"} />
                    <span className={isLiked ? "post-like" : "inter-text"}>Thích</span>
                </div>
                <div onClick={() => setShowComment(!showComment)} className="post-lcs">
                    <ChatBubbleOutlineOutlined className="inter-icon" />
                    <span className="inter-text">Bình luận</span>
                </div>
                <div className="post-lcs">
                    <SendOutlined className="inter-icon" />
                    <span className="inter-text">Chia sẻ</span>
                </div>
            </div>
             <hr className='post-hr' />
            {
                showComment && <Comment />
            }
        </>
    )
}

export default Interaction