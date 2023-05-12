import { whoToFollow } from "../../data";
import { BlueTick } from "../SVG/Icon";
import "./whoToFollow.css";
const WhoToFollow: React.FC = () => {
  return (
    <div className="whotofollow-container">
      <div className="whotofollow-title">Who to follow</div>
      <div className="whotofollow-list">
        {whoToFollow.map(({ id, username, userId, img, blueTick }) => {
          return (
            <div key={id} className="whotofollow-list-user">
              <div className="profile-img-wrapper">
                <img src={img} alt="profile" className="profile-img" />
              </div>
              <div className="profile-info-wrapper">
                <div>
                  <div className="profile-info-user">
                    <span>
                      {username.length > 15
                        ? `${username.slice(0, 15)}...`
                        : username}
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
        })}
      </div>
      <div className="show-more">Show more</div>
    </div>
  );
};

export default WhoToFollow;
