import { createContext, useEffect, useState } from "react";
import { fakeTweetsFetch } from "../utils/fakeTweetsFetc";
import { randomId } from "../utils/generateId";
import { IResponse } from "../types.ts";


export const TweetContext = createContext();

export const TweetProvider = ({ children }) => {
  const [tweets, setTweets] = useState({});
  const fetchTweets = async () => {
    const response = await fetch("https://sandbox.nextleap.app/page/fetch");
    const data = await response.json();
    setTweets(data);
  };
  useEffect(() => {
    fetchTweets();
  }, []);

  const likeTweet = (threadId) => {
    const updatedTweet = tweets.tweetThreads.map((tweet) => {
      tweet.map((twt) => {
        if (twt.threadId == threadId) {
          console.log("old count", twt.likes);
          twt.likes = twt.likes + 1;
          console.log("new count", twt.likes);
        }
        return twt;
      });
      return tweet;
    });
    console.log({ ...tweets, tweetThreads: updatedTweet });
    setTweets({ ...tweets, tweetThreads: updatedTweet });
  };
  const addNewTweet = (text) => {
    const newTweet = [
      {
        user: tweets.loggedInUser,
        tweetTime: Date.now(),
        textArea: text,
        replies: 0,
        reTweets: 0,
        views: 0,
        likes: 0,
        id: randomId(),
        threadId: randomId(),
      },
    ];
    const updatedThreads = [newTweet, ...tweets.tweetThreads];
    const updatedTweets = { ...tweets, tweetThreads: updatedThreads };

    console.log(updatedTweets);
    setTweets(updatedTweets);
  };
  return (
    <TweetContext.Provider value={{ tweets, addNewTweet, likeTweet }}>
      {children}
    </TweetContext.Provider>
  );
};
