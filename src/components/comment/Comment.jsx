import { useState } from 'react'
import './comment.css'
import { MoreHoriz } from "@mui/icons-material"


function Comment() {
    // const CommentStorage = JSON.parse( localStorage.getItem('comments'))
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState([])
        
    const handleComments = () => {
        setComments(prev =>  [...prev,comment]
            
            // save comments in local storage
            // const updateComments = [...prev, comment]
            // const jsonComments = JSON.stringify(updateComments)
            // localStorage.setItem('comments',jsonComments)
        )
        setComment('')
    }
  
    const deleteComment = (index) => {
        const newComments = [...comments]
        newComments.splice(index,1)
        setComments(newComments)
        
    }


    return (
        <div className="comment">
            <div className="comment-wrapper">
                <img className="comment-avatar" src="./assets/posts/pic2.jpg" alt="" />
                <input value={comment} placeholder='Bình luận ở đây...'
                    onChange={e => setComment(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' && handleComments()}
                    className="comment-input"
                />
            </div>
            <ul className='comment-list'>
                {
                    comments.map((comment, index) => (
                        <li key={index} className='comment-item'>
                            <img className="comment-avatar" src="./assets/posts/pic2.jpg" alt="" />
                            <div className="comment-box">
                                <span>Le Hoang Quan</span>
                                <span className="comment-text">{comment}</span>
                                <span className='comment-delete' onClick={() => deleteComment(index)} >x</span>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Comment