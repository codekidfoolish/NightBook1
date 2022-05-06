import { useState } from 'react'
import { MoreVert, ThumbUpOutlined, ChatBubbleOutlineOutlined, SendOutlined, FlashOnOutlined } from "@mui/icons-material"
import './post.css'
import { Users } from '../../dummyData'
import Interaction from '../interaction/Interaction'

function Post({ post }) {
 

    return (
        <div className="post">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img src={Users.filter(u => u.id === post?.userId)[0].profilePicture} className="post-avatar" />
                        <div className="post-user-content">
                            <p className='post-user-name'>{Users.filter(u => u.id === post?.userId)[0].username}</p>
                            <span className='post-date'>{post.date}</span>
                        </div>
                    </div>
                    <div className="post-top-right">
                        <MoreVert className="post-vert" />
                    </div>
                </div>
                <div className="post-center">
                    <p className="post-content">{post?.desc}</p>
                    <img className='post-picture' src={post?.photo} alt="" />
                </div>
            
                <Interaction />

            </div>
        </div>
    )
}

export default Post