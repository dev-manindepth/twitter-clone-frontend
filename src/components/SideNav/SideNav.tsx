import React, { useContext, useEffect, useId, useState } from "react";
import "./sideNav.css";
import { navData } from "../../data";
import twitterLogo from "../../assets/twitterLogo.png"
import profileMore from "../../assets/profile-more.png";
import { UserContext } from "../../context/userContext";
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
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="tweet-btn-small"
              width={24}
              height={24}
              fill="#fff"
            >
              <g>
                <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
              </g>
            </svg>
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
