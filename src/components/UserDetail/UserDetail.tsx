import { useEffect, useState } from "react";
import "./userDetail.css";
import { BlueTick, More } from "../SVG/Icon";
interface IUserDetailsProps {
  tweet: any;
  isComment: boolean;
}
const UserDetail: React.FC<IUserDetailsProps> = ({ tweet, isComment }) => {
  const [username, setUsername] = useState(tweet.username);
  const [userId, setUserId] = useState(tweet.userId);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 400) {
        setUsername(`${username.slice(0, 8)}...`);
        setUserId(`${userId.slice(0, 5)}...`);
      } else {
        setUsername(tweet.username);
        setUserId(tweet.userId);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [username, userId]);

  return (
    <div className="tweet-header">
      <div className="tweet-user">
        <div className="tweet-user-detail">
          <span className="tweet-user-name">{username}</span>
          {tweet.blueTick && <BlueTick width={18} height={18} fill="#1d9bf0" />}
          <span className="tweet-userId">@{userId}</span>
          <span className="tweet-created">{tweet.createdAt}</span>
        </div>
        {isComment && (
          <div>
            <span className="tweet-reply">Replying to </span>{" "}
            <span className="tweet-postId">@{tweet?.postId}</span>
          </div>
        )}
      </div>
      <div>
        <More height={24} width={24} fill="#7c7c7c" />
      </div>
    </div>
  );
};

export default UserDetail;
