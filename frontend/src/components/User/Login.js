import React, { useEffect, useState } from 'react'
import "./LoginSignUp.css"
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../action/userAction';
import Loader from '../layout/Loader/Loader';
import { Toaster, toast } from 'react-hot-toast';
import { clearErrors } from '../../action/productAction';
import {  useLocation } from 'react-router-dom';
const LoginSignUp = () => {
  const dispatch = useDispatch();
  const [LoginEmail, setLoginEmail] = useState("")
  const [LoginPassword, setLoginPassword] = useState("")
  const {loading, error, isAuthenticated} = useSelector(state=>state.user);
  const history = useNavigate();
  const location = useLocation();
  const recoverPasswordSubmit = (e)=>
  {
    e.preventDefault();
    dispatch(login(LoginEmail, LoginPassword));
  }
  const redirect = location.search ? (location.search.split("=")[1]):"account"

  // error
 useEffect(() => {
   if (error ) {
    if(error !== "Please login to Explore new stuff.")
    {
      toast.error(error);
      dispatch(clearErrors());
      history('/login')
    }
   }
   if (isAuthenticated) {
     history(`/${redirect}`);
   }
   // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [dispatch, error, isAuthenticated,history, redirect]);

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
              <form action="#" className="sign-in-form" onSubmit={recoverPasswordSubmit}>
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
                <Link to={"/password/forgot"} className="forgetPasssword_bottom__button" target='_blank'>
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