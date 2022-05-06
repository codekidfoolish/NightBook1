import './home.css'

import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'


 
function Home() {
    return (
        <>
            <Topbar />
        <div className="home-container">
            <Sidebar />
            <Feed story />
            <Rightbar />
        </div>
        </>
        )

}

export default Home