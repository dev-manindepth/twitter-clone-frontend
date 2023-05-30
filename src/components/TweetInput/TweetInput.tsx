import { useContext, useState } from "react";
import "./tweetInput.css";
import { TweetContext } from "../../context/tweetContext";
import { UserContext } from "../../context/userContext";
import { Calendar, Emoji, Gallery, Gif, Location, Poll } from "../SVG/Icon";
import { IUser } from "../../types";

interface ITweetInput{
  placeholder:string;
}

const TweetInput: React.FC = () => {
  const [tweet, setTweet] = useState("");
  const { addNewTweet } = useContext(TweetContext);
  const {
    user: { img },
  } = useContext(UserContext);

  const {
    tweets: { loggedInUser },
  }: { tweets: { loggedInUser: Pick<IUser, "imageData"> } } =
    useContext(TweetContext);

  const addTweet = () => {
    if (!tweet) {
      return;
    }
    addNewTweet(tweet);
    setTweet("");
  };
  const handleTweetText = (e: any) => {
    setTweet(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };
  return (
    <div className="tweet-input-wrapper">
      <div className="profile-wrapper">
       {loggedInUser &&<img src={loggedInUser.imageData.url} alt={loggedInUser.imageData.alt} className="profile-imgage" />} 
      </div>
      <div className="input-wrapper">
        <textarea
          className="tweet-input"
          placeholder="What's happening?"
          value={tweet}
          onChange={handleTweetText}
        ></textarea>
        <div className="input-menu-container">
          <div className="input-menu">
            <div className="tweet-input-gallery">
              <label htmlFor="file-input" className="custom-file-upload">
                <input id="file-input" type="file" />
                <Gallery height={24} width={24} fill="#1d9bf0" />
              </label>
            </div>

            <div className="tweet-input-gif">
              <label htmlFor="file-input" className="custom-file-upload">
                <input id="file-input" type="file" />
                <Gif height={24} width={24} fill="#1d9bf0" />
              </label>
            </div>

            <div className="tweet-poll">
              <label htmlFor="file-input" className="custom-file-upload">
                <input id="file-input" type="file" />
                <Poll height={24} width={24} fill="#1d9bf0" />
              </label>
            </div>

            <div className="tweet-input-emoji">
              <label htmlFor="file-input" className="custom-file-upload">
                <input id="file-input" type="file" />
                <Emoji height={24} width={24} fill="#1d9bf0" />
              </label>
            </div>

            <div className="tweet-input-calendar">
              <label htmlFor="file-input" className="custom-file-upload">
                <input id="file-input" type="file" />
                <Calendar height={24} width={24} fill="#1d9bf0" />
              </label>
            </div>

            <div className="tweet-location">
              <label htmlFor="file-input" className="custom-file-upload">
                <input id="file-input" type="file" />
                <Location height={24} width={24} fill="#8ec8ef" />
              </label>
            </div>
          </div>
          <button
            className="tweet-input-btn"
            disabled={!tweet}
            onClick={addTweet}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default TweetInput;
