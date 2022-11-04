import React, { useRef } from "react";
import "./Login.css";

const Login = () => {
  const email=useRef()
  const password=useRef()

  const handleClick=e=>{
    e.preventDefault()
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Media</h3>
          <span className="loginDesc">Connect with your friends.</span>
        </div>
        <div className="loginRight" onSubmit={handleClick}>
          <form className="loginBox">
          <input type="email" placeholder="Email" className="loginInput" ref={email} required/>
          <input type="password" placeholder="Password" className="loginInput" ref={password} required/>
          <button className="loginButton">Log In</button>
          <span className='loginForgot'>Forgot Password?</span>
          <button className="registerButton">Create a New Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
