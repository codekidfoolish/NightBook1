import './login.css'
import {useNavigate} from 'react-router-dom' 
function Login() {
    let navigate = useNavigate()
    return (
        <div className="login">
            <div className="login-wrapper">
                <div className="moon"></div>
                <div className="login-left">
                    <h1 className='login-logo'>Nightbook</h1>
                    <span className="login-message">Login now to connect with people around the world</span>
                </div>
                <div className="login-right">
                    <div className="login-form">
                        <input placeholder='Email' className="login-input" />
                        <input placeholder='Mật khấu' type='password' className="login-input" />
                        <button onClick={() => navigate("/home")} className="login-log-btn">Đăng nhập</button>
                        <span className="login-forgot">Quên mật khẩu?</span>
                        <button onClick={() => navigate("/signup")} className="login-res-btn">Đăng ký</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login