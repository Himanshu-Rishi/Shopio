import React, { useEffect, useState } from "react";
import "./LoginSignUp.css";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { Toaster, toast } from "react-hot-toast";
import { clearErrors } from "../../action/productAction";
import { register } from "../../action/userAction";
const SignUp = () => {
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const [avatar, setavatar] = useState("");
  const [avatarPreview, setavatarPreview] = useState(
    "./assets/images/User/user.png"
  );
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const history = useNavigate();
  const registerSubmit = (e) => {
    e.preventDefault();
    let myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    dispatch(register(myForm));
  };


  // error
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      history("/account");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, error, isAuthenticated, history]);
  const { name, email, password } = user;

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
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
    } else {
      setuser({ ...user, [e.target.name]: e.target.value });
    }
  };
  return (
    <>
      <Helmet>
        <title>SignUp Page</title>
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
                onSubmit={registerSubmit}
                encType="multipart/form-data"
              >
                <h2 className="title">Sign up</h2>
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
                    />
                  </label>
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    id="profile"
                    className="input__file"
                    onChange={registerDataChange}
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
                    onChange={registerDataChange}
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
                    onChange={registerDataChange}
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    name="password"
                    onChange={registerDataChange}
                  />
                </div>
                <input type="submit" value="register" className="btn" value="Sign up" />
                <div className="bottom__text">
                  <p className="social-text">Already member?</p>
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
                src="./assets/images/User/signup.svg"
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

export default SignUp;
