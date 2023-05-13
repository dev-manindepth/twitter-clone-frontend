import { Comment, Heart, Retweet, Share, View } from "../SVG/Icon";
import "./tweetAction.css";
interface ITweetActionProps {
  comment: number;
  retweet: number;
  like: number;
  view: number;
}

const TweetAction: React.FC<ITweetActionProps> = ({
  comment,
  retweet,
  like,
  view,
}) => {
  return (
    <div className="tweet-actions-wrapper">
      <div className="tweet-actions">
        <div className="tweet-action-comment">
          <Comment height={20} width={20} fill="#7c7c7c" />
          <span>{comment}</span>
        </div>
        <div className="tweet-action-retweets">
          <Retweet height={20} width={20} fill="#7c7c7c" />
          <span>{retweet}</span>
        </div>

        <div className="tweet-action-like">
          <Heart height={20} width={20} fill="#7c7c7c" />
          <span>{like}</span>
        </div>

        <div className="tweet-action-view">
          <View height={20} width={20} fill="#7c7c7c" />
          <span>{view}</span>
        </div>
        <div className="tweet-action-share">
          <Share height={20} width={20} fill="#7c7c7c" />
        </div>
      </div>
    </div>
  );
};

export default TweetAction;
