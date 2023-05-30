import { useContext } from "react";
import { whoToFollow } from "../../data";
import { IFollowData } from "../../types";
import { BlueTick } from "../SVG/Icon";
import "./whoToFollow.css";
import { TweetContext } from "../../context/tweetContext";
const WhoToFollow: React.FC = () => {
  const {
    tweets: { followData },
  }: { tweets: { followData: IFollowData } } = useContext(TweetContext);

  return (
    <div className="whotofollow-container">
      {followData && (
        <>
          <div className="whotofollow-title">{followData.title}</div>
          <div className="whotofollow-list">
            {followData.usersToFollow &&
              followData.usersToFollow.map(
                (
                  { userName, userId, imageData: { url, alt }, blueTick },
                  idx
                ) => {
                  return (
                    <div key={userId + idx} className="whotofollow-list-user">
                      <div className="profile-img-wrapper">
                        <img src={url} alt={alt} className="profile-img" />
                      </div>
                      <div className="profile-info-wrapper">
                        <div>
                          <div className="profile-info-user">
                            <span>
                              {userName.length > 15
                                ? `${userName.slice(0, 15)}...`
                                : userName}
                            </span>
                            {blueTick && (
                              <BlueTick width={18} height={18} fill="#1d9bf0" />
                            )}
                          </div>
                          <div className="profile-userid">@{userId}</div>
                        </div>
                        <div className="btn-container">
                          <button className="follow-btn">Follow</button>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
          </div>
          <div className="show-more">Show more</div>
        </>
      )}
    </div>
  );
};

export default WhoToFollow;
