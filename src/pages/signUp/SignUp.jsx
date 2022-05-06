import './signUp.css'
import {useNavigate} from 'react-router-dom' 

function SignUp() {
    let navigate = useNavigate()

    return (
        <div className="signUp">
            <div className="signUp-wrapper">
                <div className="signUp-left">
                    <h1 className='signUp-logo'>Nightbook</h1>
                    <span className="signUp-message">Sign up now to connect with people around the world</span>
                </div>
                <div className="signUp-right">
                    <div className="signUp-form">
                        <input placeholder='Email' className="signUp-input" />
                        <input placeholder='Mật khấu' type='password' className="signUp-input" />
                        <input placeholder='Nhập lại mật khấu' type='password' className="signUp-input" />
                        <button className="signUp-res-btn">Đăng ký</button>
                        <span onClick={() => navigate("/")} className="signup-ques">Bạn đã có tài khoản?</span>
                        <button onClick={() => navigate("/home")} className="signUp-log-btn">Đăng nhập</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp