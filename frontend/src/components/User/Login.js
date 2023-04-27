import React from 'react'
import "./LoginSignUp.css"
import { Helmet } from 'react-helmet';
const LoginSignUp = () => {
  return (
    <>
      <Helmet>
        <title>SignIn Page</title>
      </Helmet>
      <div className="user_container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Happy to see you again!</h3>
              <p>
                We are thrilled to welcome you to our ecommerce website! Whether
                you're looking for the latest fashion trends, top-quality
                electronics, or anything in between, we have something for
                everyone.
              </p>
            </div>
            <img
              src="./assets/images/User/login.svg"
              className="image"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginSignUp