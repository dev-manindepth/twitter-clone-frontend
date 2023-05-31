import React, { Suspense, useContext } from "react";
import "./feed.css";
import TweetInput from "../TweetInput/TweetInput";
import TweetList from "../TweetList/TweetList";
import twitterLogo from "../../assets/twitterLogo.png";
import { TweetContext } from "../../context/tweetContext";
import { TweetHand } from "../SVG/Icon";
import {  IUser } from "../../types";
import { ColorRing } from "react-loader-spinner";

const Feed: React.FC = () => {
  const  tweetContext = useContext(TweetContext) ;
  const loggedInUser = tweetContext?.tweets?.loggedInUser;

  return (
    <div className="feed-container">
      <div className="feed-header">
        <div className="feed-home">Home</div>
        <div className="feed-home-mobile-wrapper">
          <div className="feed-home-mobile">
            {loggedInUser && (
              <img
                src={loggedInUser.imageData.url}
                alt={loggedInUser.imageData.alt}
                className="profile-img-mobile"
              />
            )}
            <img src={twitterLogo} alt="logo" />
          </div>
        </div>
        <div className="feed-tabs">
          <div className="feed-tab-foryou feed-tab-active">For you</div>
          <div className="feed-tab-following ">Following</div>
        </div>
      </div>

      <TweetInput />
      <Suspense
        fallback={
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#8ec8ef", "#8ec8ef", "#8ec8ef", "#8ec8ef", "#8ec8ef"]}
          />
        }
      >
        <TweetList />
      </Suspense>

      <div className="tweet-bottom-btn-container">
        <TweetHand fill="#fff" height={24} width={24} />
      </div>
    </div>
  );
};

export default Feed;
