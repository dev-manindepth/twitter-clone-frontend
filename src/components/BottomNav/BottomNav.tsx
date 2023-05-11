import { bottomNavData } from "../../data.js";
import './bottomNav.css'

export const BottomNav = () => {
  return (
    <div className="bottom-nav-container">
      <div className="bottom-nav-item">
        {bottomNavData.map(({ id, img, className }) => {
          return (
            <div className="bottom-nav-item-icon">
              <img src={img} alt="" className={className} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
