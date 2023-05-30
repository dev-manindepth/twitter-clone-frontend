import { useEffect, useState } from "react";
import "./userDetail.css";
import { BlueTick, More } from "../SVG/Icon";
import { IUser } from "../../types";
interface IUserDetailsProps {
  user: IUser;
  isReply:boolean
}
const UserDetail: React.FC<IUserDetailsProps> = ({ user, isReply }) => {
  const [username, setUsername] = useState(user.userName);
  const [userId, setUserId] = useState(user.userId);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 400) {
        setUsername(`${username.slice(0, 8)}...`);
        setUserId(`${userId.slice(0, 5)}...`);
      } else {
        setUsername(user.userName);
        setUserId(user.userId);
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
          {user.blueTick && <BlueTick width={18} height={18} fill="#1d9bf0" />}
          <span className="tweet-userId">@{userId}</span>
          <span className="tweet-created">{new Date(user.joiningDate).getDate()}</span>
        </div>
        {isReply && (
          <div>
            <span className="tweet-reply">Replying to </span>{" "}
            <span className="tweet-postId">@{user.userId}</span>
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
