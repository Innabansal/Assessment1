import React, { useState } from 'react';
import { FaUser , FaLock, FaEnvelope} from "react-icons/fa";
import './Login.css';


const Login = () => {


  const [action, setAction] = useState ('');

  const firstLink = () =>{
    setAction (' active');
  };

  const loginLink = () => {
    setAction(' active2');

  };

  const registerLink = () => {
    setAction(' active3');

  };

  const secondLink = () =>{
    setAction (' active4');
  };

  const profileLink = () =>{
    setAction (' active5');
  };
  

  return (
    <div className={`wrapper${action}`}>
      <div className="box">
        <h1>Assessment 1</h1>
        <p>Welcome to the Landing Screen</p>
        <button className='btn btn1' type='submit' onClick={registerLink}>Create Account</button>
        <button className='btn1' type='submit' onClick={loginLink}>Already Registered? Login </button>
      </div>



      <div className="form-box login">
        <form action="">
          <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder='Username' required/>
              <FaUser className='icon' />
            </div>
            <div className="input-box">
              <input type="password" placeholder='Password' required/>
              <FaLock className='icon' />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />Remember me
              </label>
              <a href="#"> Forgot Password?</a>
            </div>
            <button type="submit" onClick={profileLink}>Login</button>
            <div className="register-link">
              <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>
            </div>
        </form>
      </div>


      <div className="form-box register">
        <form action="">
          <h1>Registration</h1>
            <div className="input-box">
              <input type="text" placeholder='Username' required/>
              <FaUser className='icon' />
            </div>
            <div className="input-box">
              <input type="email" placeholder='Email' required/>
              <FaEnvelope className='icon'/>
            </div>
            <div className="input-box">
              <input type="password" placeholder='Password' required/>
              <FaLock className='icon' />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />I agree to the Terms & Conditions
              </label>
            </div>
            <button type="submit">Register</button>
            <div className="register-link">
              <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
            </div>
        </form>
      </div>


      <div className="box1">
        <h1>Profile Page</h1>
        <p>Welcome to my Profile</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa unde et amet exercitationem veniam asperiores qui dignissimos,
           enim ipsa earum fugit! Magni dolor facere, corrupti nesciunt quibusdam maiores dolorum sunt!</p>
        <button type='submit' onClick={firstLink} className='btn2'>Log out</button>
      </div>
    </div>
  )
}

export default Login
