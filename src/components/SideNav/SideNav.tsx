import React, { Suspense, useContext, useEffect, useId, useState } from "react";
import "./sideNav.css";
import profileMore from "../../assets/profile-more.png";
import { TweetHand } from "../SVG/Icon";
import { TweetContext } from "../../context/tweetContext";
import { Link } from "react-router-dom";
import { IUser, ISideNavigationButtons } from "../../types";
import SuspenseImage from "../SuspenseImage/SuspenseImage";
import { ColorRing } from "react-loader-spinner";


const SideNav: React.FC = () => {

  // const {
  //   tweets: { sideNavigationButtons, loggedInUser },
  // }: {
  //   tweets: {
  //     sideNavigationButtons: ISideNavigationButtons[];
  //     loggedInUser: IUser;
  //   };
  // } = useContext(TweetContext);
const tweetContext = useContext(TweetContext);
const sideNavigationButtons = tweetContext?.tweets?.sideNavigationButtons;
const loggedInUser = tweetContext?.tweets?.loggedInUser;
  return (
    <div className="sidenav-container">
      <div className="sidenav-menu-container">
        <nav className="nav-container">
          {sideNavigationButtons &&
            sideNavigationButtons.length > 0 &&
            sideNavigationButtons.map(
              (
                { actionUrl, buttonText, icon: { alt, aspX, aspY, url } },
                idx
              ) => (
                <Link to={actionUrl} key={idx}>
                  <div className="nav-item">
                    <Suspense
                      fallback={
                        <ColorRing
                          visible={true}
                          height="30"
                          width="30"
                          ariaLabel="blocks-loading"
                          wrapperStyle={{}}
                          wrapperClass="blocks-wrapper"
                          colors={[
                            "#8ec8ef",
                            "#8ec8ef",
                            "#8ec8ef",
                            "#8ec8ef",
                            "#8ec8ef",
                          ]}
                        />
                      }
                    >
                      <SuspenseImage
                        src={url}
                        alt={alt}
                        height={aspY}
                        width={aspX}
                      />
                    </Suspense>

                    {buttonText && (
                      <div className="nav-title">{buttonText}</div>
                    )}
                  </div>
                </Link>
              )
            )}
        </nav>
        <div className="tweet-btn-container">
          <button className="tweet-btn">Tweet</button>
          <div className="tweet-btn-small-container">
            <TweetHand fill="#fff" height={24} width={24} />
          </div>
        </div>
      </div>

      {loggedInUser && (
        <div>
          <div className="profile-container">
            <div className="profile-info">
              <img
                src={loggedInUser.imageData.url}
                className="profile-img"
                alt={loggedInUser.imageData.alt}
              />
              <div className="profile-data">
                <div className="profile-name">{loggedInUser.userName}</div>
                <div className="profile-id">@{loggedInUser.userId}</div>
              </div>
            </div>

            <div className="more">
              <img src={profileMore} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideNav;
