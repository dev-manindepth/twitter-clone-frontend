import React from "react";
import "./tweet.css";
import TweetAction from "../TweetAction/TweetAction";
import UserDetail from "../UserDetail/UserDetail";
interface ITweetProps {
  tweet: any;
}
const Tweet: React.FC<ITweetProps> = ({ tweet }) => {
  return (
    <div className="tweet-container">
      <div className="tweet-info-wrapper">
        <div className="tweet-info">
          <div className="tweet-avatar">
            <img src={tweet.avatar} alt="" className="avatar" />
            {tweet.thread.length || tweet.comment.length ? (
              <>
                <div className="vertical-line"></div>
              </>
            ) : null}
          </div>
          <div className="tweet-content-container">

            <UserDetail tweet={tweet} isComment={false}/>
            <div className="tweet-content">
              <div>{tweet.text}</div>
              <div className={`${tweet.img ? "tweet-image-wrapper" : ""}`}>
                {tweet.img && <img src={tweet.img} className="tweet-image" />}
              </div>
              <TweetAction
                comment={tweet.comment.length}
                like={tweet.like}
                retweet={tweet.retweets}
                view={tweet.view}
              />
            </div>
          </div>
        </div>
      </div>
      {tweet.thread.length || tweet.comment.length ? (
        <div className="tweet-thread-comment-wrapper">
          <div className="tweet-thread-comment">
            {(tweet.thread.length && tweet.comment.length) ||
            tweet.thread.length ? (
              <>
                <img src={tweet.avatar} alt="" className="avatar-mini" />
                <div className="tweet-thread-more">Show this thread</div>
              </>
            ) : tweet.comment.length > 0 ? (
              <>
                <img
                  src={tweet.comment[0].avatar}
                  alt="profile"
                  className="avatar"
                />
                <div className="tweet-highlight-comment">
                  <UserDetail tweet={tweet.comment[0]} isComment={true} />
                  {tweet.comment[0].text}
                  <TweetAction
                    comment={tweet.comment.length ?? 0}
                    like={tweet.comment[0].like ?? 0}
                    view={tweet.comment[0].view ?? 0}
                    retweet={tweet.comment[0].retweets ?? 0}
                  />
                </div>
              </>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Tweet;
