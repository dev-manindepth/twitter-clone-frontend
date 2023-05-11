import { createContext, useEffect, useState } from "react";
import { fakeTweetsFetch } from "../utils/fakeTweetsFetch";

export const TweetContext = createContext();

export const TweetProvider = ({ children }) => {
  const [tweets, setTweets] = useState([]);
  const fetchTweets = async () => {
    const response = await fakeTweetsFetch("https://fakeTweets.com/api/tweets");
    setTweets(response);
  };
  useEffect(() => {
    fetchTweets();
  }, []);

  const addNewTweet = (text) => {
    const newTweet = {
      userId: "manish",
      username: "Manish Kumar",
      createdAt: "0m",
      avatar:
        "https://pbs.twimg.com/profile_images/1614470877432938499/VpfrV5sX_x96.jpg",
      text: text,
      comment: [],
      retweets: 0,
      like: 0,
      view: 0,
      img: "",
      thread: [],
    };
    setTweets([newTweet, ...tweets]);
  };
  return (
    <TweetContext.Provider value={{ tweets ,addNewTweet}}>{children}</TweetContext.Provider>
  );
};
