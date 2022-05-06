import Share from '../share/Share'
import Post from '../post/Post'
import Story from '../story/Story'
import './feed.css'
import { Posts } from '../../dummyData'

function Feed({ story }) {

    return (
        <div className="feed">
            <div className="feed-wrapper">
                {
                    story ? 
                    <div className="story-wrapper">
                        <ul className="story-list">
                            {
                                Posts.map(p => (
                                    <Story key={p.id} post={p} />
                                ))
                            }
                        </ul>
                    </div> :
                        null
                }
                <Share />
                {
                    Posts.map(p => (
                        <Post key={p.id} post={p} />
                    ))
                }
            </div>
        </div>
    )
}

export default Feed