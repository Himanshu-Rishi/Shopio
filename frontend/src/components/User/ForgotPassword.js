import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import Loader from '../layout/Loader/Loader';
import { Toaster, toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors} from '../../action/productAction'
import { forgotPassword } from "../../action/userAction";

const ForgotPassword = () => {
    const dispatch = useDispatch();
    const { loading, error, message } = useSelector(
      (state) => state.forgotPassword
    );
    const [email, setemail] = useState("")
    const forgotPasswordSubmit = (e) => {
      e.preventDefault();
      if(message)
      {
        if(message !== "User not found...!")
        {
            toast.success(message)
        }
      }
      const myform = new FormData();
        myform.set("email", email);
      dispatch(forgotPassword(myform));
    };

    // error
    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch(clearErrors());
      }
      if(message)
      {
        toast.success(message);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, error, message]);

  return (
    <>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      {loading ? (
        <Loader />
      ) : (
        <div className="user_container">
          <div className="forms-container">
            <div className="signin-signup">
              <form
                action="#"
                className="sign-in-form"
                onSubmit={forgotPasswordSubmit}
                encType="multipart/form-data"
              >
                <h2 className="user__title">Recover Password ?</h2>
                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    name="email"
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <input type="submit" className="btn" value="Recover" />
                <div className="bottom__text">
                  <p className="social-text">Want to Login?</p>
                  <Link to={"/login"} className="sign__bottom__button">
                    Sign In
                  </Link>
                </div>
              </form>
            </div>
          </div>

          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>Happy to make you member!</h3>
                <p>
                  We are thrilled to welcome you to our ecommerce website!
                  Whether you're looking for the latest fashion trends,
                  top-quality electronics, or anything in between, we have
                  something for everyone.
                </p>
              </div>
              <img
                src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1682954460/SVG%20Images/Authentication-cuate_n2alkg.svg"
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

export default ForgotPassword