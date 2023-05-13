import React, { useContext, useEffect, useId, useState } from "react";
import "./sideNav.css";
import { navData } from "../../data";
import twitterLogo from "../../assets/twitterLogo.png"
import profileMore from "../../assets/profile-more.png";
import { UserContext } from "../../context/userContext";
import { TweetHand } from "../SVG/Icon";
const SideNav: React.FC = () => {
  const {user:{img,userId,username}} = useContext(UserContext);

  return (
    <div className="sidenav-container">
      <div className="sidenav-menu-container">
        <div className="logo-container">
          <img src={twitterLogo} alt="" />
        </div>
        <nav className="nav-container">
          {navData.map(({ id, title, img }) => (
            <div className="nav-item" key={id}>
              <img src={img} alt="nav-link" />
              <div className="nav-title">{title.text}</div>
            </div>
          ))}
        </nav>
        <div className="tweet-btn-container">
          <button className="tweet-btn">Tweet</button>
          <div className="tweet-btn-small-container">
            <TweetHand fill="#fff" height={24} width={24}/>
          </div>
        </div>
      </div>

      <div>
        <div className="profile-container">
          <div className="profile-info">
            <img src={img} className="profile-img" />
            <div className="profile-data">
              <div className="profile-name">{username}</div>
              <div className="profile-id">@{userId}</div>
            </div>
          </div>

          <div className="more">
            <img src={profileMore} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
