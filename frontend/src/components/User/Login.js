import React, { useEffect, useState } from 'react'
import "./LoginSignUp.css"
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../action/userAction';
import Loader from '../layout/Loader/Loader';
import { Toaster, toast } from 'react-hot-toast';
import { clearErrors } from '../../action/productAction';
const LoginSignUp = () => {
  const dispatch = useDispatch();
  const [LoginEmail, setLoginEmail] = useState("")
  const [LoginPassword, setLoginPassword] = useState("")
  const {loading, error, isAuthenticated} = useSelector(state=>state.user);
  const history = useNavigate();
  const loginSubmit = (e)=>
  {
    e.preventDefault();
    dispatch(login(LoginEmail, LoginPassword));
  }
  // error
 useEffect(() => {
   if (error) {
     toast.error(error);
     dispatch(clearErrors());
     history('/login')
   }
   if (isAuthenticated) {
     history("/account");
   }
   // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [dispatch, error, isAuthenticated, history]);
 function getCookie(key) {
   var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
   return b ? b.pop() : "";
 }
 const token = getCookie('token');
//  console.log(token)

  return (
    <>
      <Helmet>
        <title>SignIn Page</title>
      </Helmet>
      <Toaster position="top-center" reverseOrder={false} />

      {loading ? (
        <Loader />
      ) : (
        <div className="user_container">
          <div className="forms-container">
            <div className="signin-signup">
              <form action="#" className="sign-in-form" onSubmit={loginSubmit}>
                <h2 className="user__title">Sign in</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input
                    type="email"
                    required
                    value={LoginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={LoginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <input type="submit" value="Login" className="btn solid" />
                <Link to={"/login"} className="forgetPasssword_bottom__button">
                  <p className="social-text">Forgot Password?</p>
                </Link>
              </form>
            </div>
          </div>

          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>Happy to see you again!</h3>
                <p>
                  We are thrilled to welcome you to our ecommerce website!
                  Whether you're looking for the latest fashion trends,
                  top-quality electronics, or anything in between, we have
                  something for everyone.
                </p>
                Not a member?
                <Link to={"/signup"} className="sign__button">
                  Sign Up
                </Link>
              </div>
              <img
                src="./assets/images/User/login.svg"
                className="image"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginSignUp