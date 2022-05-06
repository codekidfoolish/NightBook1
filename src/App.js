import { Routes, Route, Link } from 'react-router-dom'
import "./App.css"
import Home from "./pages/Home/Home"
import Profile from "./pages/profile/Profile"
import Login from "./pages/login/Login"
import SignUp from "./pages/signUp/SignUp"
import MobieNavbar from "./pages/MobieNavbar/MobieNavbar"


function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mobieNavbar" element={<MobieNavbar />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
