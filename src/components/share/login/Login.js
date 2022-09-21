import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Media</h3>
          <span className="loginDesc">Connect with your friends.</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
          <input placeholder="Email" className="loginInput" />
          <input placeholder="Password" className="loginInput" />
          <button className="loginButton">Log In</button>
          <span className='loginForgot'>Forgot Password?</span>
          <button className="registerButton">Create a New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
