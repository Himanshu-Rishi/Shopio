import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Toaster, toast } from 'react-hot-toast';
import Loader from '../layout/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updatePassword } from '../../action/userAction';
import { clearErrors } from '../../action/productAction';
import { UPDATE_PASSWORD_RESET } from '../../constants/userConstants';

const UpdatePassword = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const { error, loading, isUpdated } = useSelector((state) => state.profile);
    const [newPassword, setnewPassword] = useState("")
    const [oldPassword, setoldPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    const history = useNavigate();
    const handleUpdatePassword = (e) => {
      e.preventDefault();
      const myform = new FormData();
      myform.set("oldPassword", oldPassword);
      myform.set("newPassword", newPassword);
      myform.set("confirmPassword", confirmPassword);
      dispatch(updatePassword(myform));
    };

    // error
    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch(clearErrors());
      }
      if (isUpdated) {
        toast.success("Password changed Successfully.");
        history("/account");
        dispatch({
          type: UPDATE_PASSWORD_RESET,
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, error, isUpdated, user, history]);


  return (
    <>
      <Helmet>
        <title>Change Password</title>
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
                onSubmit={handleUpdatePassword}
                encType="multipart/form-data"
              >
                <h2 className="user__title">Hi {user.name}!</h2>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Old Password"
                    required
                    value={oldPassword}
                    name="oldpassword"
                    onChange={(e) => setoldPassword(e.target.value)}
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="New Password"
                    required
                    value={newPassword}
                    name="newpassword"
                    onChange={(e) => setnewPassword(e.target.value)}
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
                <input type="submit" className="btn" value="Change" />
              </form>
            </div>
          </div>

          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>Change Your Password.</h3>
                <p>
                  Remember to choose a strong password so that no one can guess it.
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
}

export default UpdatePassword