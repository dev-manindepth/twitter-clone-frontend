import { useContext, useEffect, useState } from "react";
import { fakeTweetsFetch } from "../../utils/fakeTweetsFetch";
import Tweet from "../Tweet/Tweet";
import { TweetContext } from "../../context/tweetContext";

const TweetList = () => {
  const { tweets } = useContext(TweetContext);
  return (
    <div className="tweet-list-container">
      {tweets &&
        tweets.length > 0 &&
        tweets.map((tweet: any) => {
          return <Tweet tweet={tweet} />;
        })}
    </div>
  );
};

export default TweetList;
