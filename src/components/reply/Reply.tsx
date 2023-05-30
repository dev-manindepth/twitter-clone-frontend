import TweetInput from "../TweetInput/TweetInput";
import "./reply.css";

interface IReply{
  handleModalClose:()=>void
}
const Reply: React.FC<IReply> = ({handleModalClose}) => {
  return (
    <>
      <div className="reply-modal" onClick={handleModalClose}>
        <div className="reply-modal-container">
          <div className="reply-modal-header"></div>
          <div className="reply-modal-body">
            <TweetInput />

          </div>
        </div>
      </div>
    </>
  );
};
export default Reply;
