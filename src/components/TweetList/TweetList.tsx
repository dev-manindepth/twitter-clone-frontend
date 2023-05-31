import { useContext, useEffect, useRef, useState } from "react";
import { fakeTweetsFetch } from "../../utils/fakeTweetsFetc";
import Tweet from "../Tweet/Tweet";
import { TweetContext } from "../../context/tweetContext";
import { ITweet } from "../../types";

const TweetList = () => {
  // const {
  //   tweets: { tweetThreads },
  // }: {
  //   tweets: {
  //     tweetThreads: ITweet[][];
  //   };
  // } = useContext(TweetContext);
  const tweetContext = useContext(TweetContext);
  const tweetThreads = tweetContext?.tweets?.tweetThreads;
 
  return (
    <div
      className="tweet-list-container"
    >
      {tweetThreads && tweetThreads.map((tweet, idx) => {
        return <Tweet tweets={tweet} key={idx} idx={idx} />;
      })}
    </div>
  );
};

export default TweetList;
