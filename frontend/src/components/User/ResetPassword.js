import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { Toaster, toast } from "react-hot-toast";
import { clearErrors } from "../../action/productAction";
import { resetPassword } from "../../action/userAction";

const ResetPassword = () => {
    const {token} = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { error, loading, success } = useSelector((state) => state.forgotPassword);
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const history = useNavigate();
  const handleResetPassword = (e) => {
    e.preventDefault();
    dispatch(resetPassword(token, password, confirmPassword));
  };

  // error
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      toast.success("Password Updated Successfully.");
      history("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, error, success, user, history]);

  return (
    <>
      <Helmet>
        <title>Reset Password</title>
      </Helmet>
      <Toaster position="top-center" reverseOrder={false} />
      {loading ? (
        <Loader />
      ) : (
        <div className="user_container">
          <div className="forms-container">
            <div className="signin-signup">
              <form
                action="#"
                className="sign-in-form"
                onSubmit={handleResetPassword}
                encType="multipart/form-data"
              >
                <h2 className="user__title">Reset Password</h2>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    name="oldpassword"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    name="confirmpassword"
                    onChange={(e) => setconfirmPassword(e.target.value)}
                  />
                </div>
                <input type="submit" className="btn" value="Reset" />
              </form>
            </div>
          </div>

          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>One step closer to join again.</h3>
                <p>
                  Remember to choose a strong password so that no one can guess
                  it.
                </p>
              </div>
              <img
                src="https://res.cloudinary.com/dbymhpzhq/image/upload/v1682880304/SVG%20Images/Mobile_login-amico_vxqetr.svg"
                className="image"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResetPassword;
