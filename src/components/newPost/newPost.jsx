import './newPost.css'
import { MoreVert} from "@mui/icons-material"
import Interaction from '../interaction/Interaction'




function NewPost({newPost}) {
  
    return (
       <li className="newPost-wrapper">
            <div className="newPost-top">
                <div className="newPost-top-left">
                    <img src='./assets/posts/pic2.jpg' className="newPost-avatar" />
                    <div className="newPost-user">
                        <p className='newPost-user-name'>Le Hoang Quan</p>
                        <span className='newPost-date'>1 phút trước</span>
                    </div>
                </div>
                <div className="newPost-top-right">
                    <MoreVert className="newPost-vert" />
                </div>
            </div>
            <div className="newPost-center">
                <p className="newPost-content">{newPost}</p>
            </div>
            <Interaction />
        </li>
    )
    
}

export default NewPost