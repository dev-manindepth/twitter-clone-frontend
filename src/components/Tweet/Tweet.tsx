import React from "react";
import "./tweet.css";
import TweetAction from "../TweetAction/TweetAction";
import UserDetail from "../UserDetail/UserDetail";
import { ITweet } from "../../types";
interface ITweetProps {
  tweets: ITweet[];
  idx:number;
}
const Tweet: React.FC<ITweetProps> = ({ tweets,idx }) => {
  const incrementLike=(like:number)=>{
    console.log(like);
     like = like+1;
     console.log('new like',like);
     return like;
  }
  return (
    <div className="tweet-container" key={idx}>
      {tweets &&
        tweets.length > 0 &&
        tweets.map(
          (
            { user, tweetTime, textArea, replies, reTweets, views, likes ,id,threadId },
            idx
          ) => (
            <div className="tweet-info-wrapper" key={id} data-id={threadId}>
              <div className="tweet-info">
                <div className="tweet-avatar">
                  <img
                    src={user.imageData.url}
                    alt={user.imageData.alt}
                    className="avatar"
                  />
                  {tweets.length !== 1 && idx !== tweets.length - 1 ? (
                    <div className="vertical-line"></div>
                  ) : null}
                </div>
                <div className="tweet-content-container">
                  <UserDetail
                    user={user}
                    isReply={idx !== 0}
                  />
                  <div className="tweet-content">
                    <div>{textArea}</div>
                    {/* <div
                        className={`${tweet.img ? "tweet-image-wrapper" : ""}`}
                      >
                        {tweet.img && (
                          <img src={tweet.img} className="tweet-image" />
                        )}
                      </div> */}
                    <TweetAction
                      replies={replies}
                      like={likes}
                      incrementLike={incrementLike}
                      retweet={reTweets}
                      view={views}
                      threadId={threadId}
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        )}
    </div>
  );
};

export default Tweet;
