import "./userDetail.css";
interface IUserDetailsProps {
  tweet: any;
  isComment: boolean;
}
const UserDetail: React.FC<IUserDetailsProps> = ({ tweet,isComment }) => {
  console.log(tweet);
  return (
    <div className="tweet-header">
      <div className="tweet-user">
        <div className="tweet-user-detail">

        <span className="tweet-user-name">{tweet.username}</span>
        <span className="tweet-userId">@{tweet.userId}</span>
        <span className="tweet-created">{tweet.createdAt}</span>
        </div>
        {
          isComment && <div ><span className="tweet-reply">Replying to </span> <span className="tweet-postId">@{tweet?.postId}</span></div>
        }
      </div>
      <div>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          width="24"
          height="24"
          fill="#7c7c7c"
        >
          <g>
            <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default UserDetail;
