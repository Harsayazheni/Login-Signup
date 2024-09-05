import React, { useState } from 'react'; // Import useState
import './LoginSignup.css';
import mail_icon from '../Assets/email.png';
import pass_icon from '../Assets/password.png';
import person_icon from '../Assets/person.png';

const LoginSignup = () => {
    
    const [action, setAction] = useState("Sign Up"); 
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:<div className='input'>
                    <img src={mail_icon} alt="email icon"/>
                    <input type="text" placeholder='Name'/>
                </div>}
                
                <div className='input'>
                    <img src={person_icon} alt="person icon"/>
                    <input type="text" placeholder='email-id' />
                </div>
                <div className='input'>
                    <img src={pass_icon} alt="password icon"/>
                    <input type="password" placeholder='password' />
                </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className="forgot-password">
                Lost Password? <span>Click Here</span>
            </div>}
            
            <div className='submit-container'>
                <div className={action==='Login'?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>
                    SignUp
                </div>
                <div className={action==='Sign Up'?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>
                    Login
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
