import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../layout/Loader/Loader";
import "./Profile.css";
const Profile = (props) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const history = useNavigate();
  useEffect(() => {
    if (isAuthenticated === false) {
      history("/login");
    }
  }, [history, isAuthenticated]);
  function handleorders() {
    history("/orders");
  }
  function updateProfile() {
    history("/profile/update");
  }
  function handlePassword() {
    history("/password/update");
  }
  return (
    <Fragment>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <>
          {isAuthenticated && (
            <>
              <Header user={user} isAuthenticated={isAuthenticated} />
              <div className="container">
                <h2 className="profile__heading">Profile</h2>
                <p className="profile__subheading">User's Profile Section</p>
                <div className="profile__box">
                  <div className="user__image_section">
                    <div className="image__seciton">
                      <img src={user.avatar.url} alt="profile_pic" />
                    </div>
                    <div className="profile__button">
                      <button className="profile__btn" onClick={updateProfile}>
                        Update Profile
                      </button>
                    </div>
                  </div>
                  <div className="user__text__section">
                    <div className="user__name">
                      Name: <span className="span__box">{user.name}</span>
                    </div>
                    <div className="user__email">
                      Email: <span className="span__box">{user.email}</span>
                    </div>
                    <div className="user__info">
                      Account Created: <span className="span__box">{user.created_at}</span>
                    </div>
                    <div className="user__role">
                      User Role: <span className="span__box">{user.role}</span>
                    </div>
                    <div className="button__section">
                      <button className="profile__btn" onClick={handleorders}>
                        My Orders
                      </button>
                      <button className="profile__btn" onClick={handlePassword}>
                        Change Password
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          <Footer />
        </>
      )}
    </Fragment>
  );
};

export default Profile;
