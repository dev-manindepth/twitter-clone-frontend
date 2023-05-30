import { useContext, useEffect, useRef, useState } from "react";
import { fakeTweetsFetch } from "../../utils/fakeTweetsFetc";
import Tweet from "../Tweet/Tweet";
import { TweetContext } from "../../context/tweetContext";
import { ITweet } from "../../types";

const TweetList = () => {
  const {
    tweets: { tweetThreads },
  }: {
    tweets: {
      tweetThreads: ITweet[][];
    };
  } = useContext(TweetContext);
  const tweetListRef = useRef<HTMLDivElement>(null);
  const handleTweetAction = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    let target = event.target as HTMLElement | null;
    const threadId = target
      ?.closest(".tweet-info-wrapper")
      ?.getAttribute("data-id");

    while (target !== null) {
      if (target.classList.contains("tweet-action-comment")) {
        console.log("comment", threadId);
        break;
      }
      if (target.classList.contains("tweet-action-like")) {
        console.log("like", threadId);

        break;
      }
      if (target.classList.contains("tweet-action-retweets")) {
        console.log("retweets", threadId);
        break;
      }
      target = target.parentElement;
    }
  };
  return (
    <div
      className="tweet-list-container"
      // ref={tweetListRef}
      // onClick={handleTweetAction}
    >
      {tweetThreads &&
        tweetThreads.length > 0 &&
        tweetThreads.map((tweet, idx) => {
          return <Tweet tweets={tweet} key={idx} idx={idx} />;
        })}
    </div>
  );
};

export default TweetList;
