import React from "react";

import "./Login.css";

function Login() {
  return (
    <div className="login">
      <img
        className="login__logo"
        src="https://logos-download.com/wp-content/uploads/2016/03/Amazon_Logo_2000.png"
        alt=""
      />
      <div className="login__container">
        <div className="link">
          <h1>Sign In</h1>
        </div>
        <form>
          <h5>E-mail</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button className="login__signInButton">
            <a href="/">Back to Homepage</a>
          </button>
          <button type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="login__registerButton">Create Account</button>
      </div>
    </div>
  );
}

export default Login;
