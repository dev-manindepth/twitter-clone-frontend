import { ReactNode, createContext, useEffect, useState } from "react";
import { randomId } from "../utils/generateId";
import { ColorRing } from "react-loader-spinner";
import { IResponse, ITweet } from "../types";

const fetchTweets = (): Promise<IResponse> => {
  return fetch("https://sandbox.nextleap.app/page/fetch").then((response) =>
    response.json()
  );
};
interface ITweetProviderProps {
  children: ReactNode;
}
interface ITweetContextValues {
  tweets:IResponse
  addNewTweet: (text: string) => void;
  likeTweet: (threadId: string) => void;
}
export const TweetContext = createContext<ITweetContextValues | undefined>(
  undefined
);
export const TweetProvider: React.FC<ITweetProviderProps> = ({ children }) => {
  const [tweets, setTweets] = useState<IResponse | undefined>(undefined);

  useEffect(() => {
    fetchTweets().then((data) => setTweets(data));
  }, []);

  const likeTweet = (threadId: string) => {
    if (tweets) {
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
    }
  };
  const addNewTweet = (text: string) => {
    if (tweets) {
      const newTweet: ITweet[] = [
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
    }
  };
  if (!tweets) {
    return (
      <div style={{display:"grid",placeItems:'center',height:'100vh'}}>

      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#8ec8ef", "#8ec8ef", "#8ec8ef", "#8ec8ef", "#8ec8ef"]}
        />
        </div>
    );
  }

  return (
    <TweetContext.Provider value={{ tweets, addNewTweet, likeTweet }}>
      {children}
    </TweetContext.Provider>
  );
};
