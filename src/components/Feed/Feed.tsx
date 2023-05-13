import React, { useContext } from "react";
import "./feed.css";
import TweetInput from "../TweetInput/TweetInput";
import TweetList from "../TweetList/TweetList";
import twitterLogo from "../../assets/twitterLogo.png";
import { TweetProvider } from "../../context/tweetContext";
import { UserContext } from "../../context/userContext";
import { TweetHand } from "../SVG/Icon";
const Feed: React.FC = () => {
  const {
    user: { img },
  } = useContext(UserContext);
  return (
    <div className="feed-container">
      <div className="feed-header">
        <div className="feed-home">Home</div>
        <div className="feed-home-mobile-wrapper">
          <div className="feed-home-mobile">
            <img src={img} alt="profile" className="profile-img-mobile" />
            <img src={twitterLogo} alt="logo" />
          </div>
        </div>
        <div className="feed-tabs">
          <div className="feed-tab-foryou feed-tab-active">For you</div>
          <div className="feed-tab-following ">Following</div>
        </div>
      </div>
      <TweetProvider>
        <TweetInput />
        <TweetList />
      </TweetProvider>
      <div className="tweet-bottom-btn-container">
        <TweetHand fill="#fff" height={24} width={24}/>
      </div>
    </div>
  );
};

export default Feed;
