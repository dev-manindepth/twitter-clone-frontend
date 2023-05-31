import { Suspense } from "react";
import { bottomNavData } from "../../data.js";
import './bottomNav.css'
import SuspenseImage from "../SuspenseImage/SuspenseImage";
import { ColorRing } from "react-loader-spinner";

 const BottomNav = () => {
  return (
    <div className="bottom-nav-container">
      <div className="bottom-nav-item">
        {bottomNavData.map(({ id, img, className }) => {
          return (
            <div className="bottom-nav-item-icon" key={id}>
              <Suspense
                fallback={
                  <ColorRing
                    visible={true}
                    height="30"
                    width="30"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={[
                      "#8ec8ef",
                      "#8ec8ef",
                      "#8ec8ef",
                      "#8ec8ef",
                      "#8ec8ef",
                    ]}
                  />
                }
              >
                <SuspenseImage src={img} alt="" className={className} />
              </Suspense>
              <img src={img} alt="" className={className} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;