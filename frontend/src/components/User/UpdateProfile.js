import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { Toaster, toast } from "react-hot-toast";
import { clearErrors } from "../../action/productAction";
import { loadUser, updateProfile } from "../../action/userAction";
import { UPDATE_PROFILE_RESET } from "../../constants/userConstants";
const UpdateProfile = () => {
    const dispatch = useDispatch();
    const {user} = useSelector(
      (state) => state.user
    );
    const {error, loading, isUpdated} = useSelector(
      (state) => state.profile
    );
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [avatar, setavatar] = useState("");
    const [avatarPreview, setavatarPreview] = useState(
      "https://res.cloudinary.com/dbymhpzhq/image/upload/v1682878212/Logo/user-2_on3crp.png"
    );
    const history = useNavigate();
    const updateHandle = (e) => {
      e.preventDefault();
      let myForm = new FormData();
      myForm.set("name", name);
      myForm.set("email", email);
      myForm.set("avatar", avatar);
      dispatch(updateProfile(myForm));
    };

    // error
    useEffect(() => {
        if(user)
        {
            setname(user.name)
            setemail(user.email)
            setavatarPreview(user.avatar.url)
        }
      if (error) {
        toast.error(error);
        dispatch(clearErrors());
      }
      if (isUpdated) {
        toast.success("Profile Update Successfully.")
        dispatch(loadUser());
        history("/account");
        dispatch({
            type: UPDATE_PROFILE_RESET
        })
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, error, isUpdated, user, history]);

    const updateAvatar = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setavatarPreview(reader.result);
            setavatar(reader.result);
          }
        };
        const file = e.target.files[0];
        if (file) {
          reader.readAsDataURL(file);
        }
    };
  return (
    <>
      <Helmet>
        <title>Update Profile</title>
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
                onSubmit={updateHandle}
                encType="multipart/form-data"
              >
                <h2 className="user__title">Hi {user.name}!</h2>
                <div className="input-field__image">
                  <label
                    htmlFor="profile"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      src={avatarPreview || "./assets/images/User/user.png"}
                      alt="avatar"
                      width="80"
                      className="input__image"
                      style={{width: 150, height: 150}}
                    />
                  </label>
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    id="profile"
                    className="input__file"
                    onChange={updateAvatar}
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    value={name}
                    name="name"
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    name="email"
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
                <input type="submit" className="btn" value="Update" />
              </form>
            </div>
          </div>

          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>Update Your Profile!</h3>
                <p>
                  You can update your personal details like email, name and your
                  profile image.
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

export default UpdateProfile