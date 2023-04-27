import React from 'react'
import "./LoginSignUp.css"
import { Helmet } from 'react-helmet';
const SignUp = () => {
  return (
    <>
      <Helmet>
        <title>SignUp Page</title>
      </Helmet>
      <div className="user_container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Happy to make you member!</h3>
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

export default SignUp