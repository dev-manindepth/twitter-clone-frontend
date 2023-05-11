import React, { useContext } from "react";
import "./feed.css";
import TweetInput from "../TweetInput/TweetInput";
import TweetList from "../TweetList/TweetList";
import twitterLogo from "../../assets/twitterLogo.png";
import { TweetProvider } from "../../context/tweetContext";
import { UserContext } from "../../context/userContext";
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
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="tweet-bottom-btn"
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
  );
};

export default Feed;
