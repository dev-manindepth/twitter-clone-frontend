import { useContext, useState } from "react";
import { formatNumber } from "../../utils/unitConversion";
import { Comment, Heart, Retweet, Share, View } from "../SVG/Icon";
import "./tweetAction.css";
import Reply from "../reply/Reply";
import { TweetContext } from "../../context/tweetContext";
interface ITweetActionProps {
  replies: number;
  retweet: number;
  like: number;
  view: number;
  incrementLike:(like:number)=>number
  threadId: string,
}

const TweetAction: React.FC<ITweetActionProps> = ({
  replies,
  retweet,
  like,
  view,
  incrementLike,
  threadId
}) => {
  const [showReplyModal, setShowReplyModal] = useState(false);
  const { likeTweet } = useContext(TweetContext);
  const handleModalClose = () => {
    setShowReplyModal(false);
  };
  return (
    <div className="tweet-actions-wrapper">
      <div className="tweet-actions">
        <div
          className="tweet-action-comment"
          onClick={() => setShowReplyModal(!showReplyModal)}
        >
          <Comment height={20} width={20} fill="#7c7c7c" />
          <span>{formatNumber(replies)}</span>
        </div>
        {showReplyModal && <Reply handleModalClose={handleModalClose} />}
        <div className="tweet-action-retweets">
          <Retweet height={20} width={20} fill="#7c7c7c" />
          <span>{formatNumber(retweet)}</span>
        </div>

        <div className="tweet-action-like" onClick={() => likeTweet(threadId)}>
          <Heart height={20} width={20} fill="#7c7c7c" />
          <span>{formatNumber(like)}</span>
        </div>

        <div className="tweet-action-view">
          <View height={20} width={20} fill="#7c7c7c" />
          <span>{formatNumber(view)}</span>
        </div>
        <div className="tweet-action-share">
          <Share height={20} width={20} fill="#7c7c7c" />
        </div>
      </div>
    </div>
  );
};

export default TweetAction;
