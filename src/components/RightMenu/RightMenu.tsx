import React from "react";
import "./rightMenu.css";
import Search from "../Search/Search";
import News from "../News/News";
import WhoToFollow from "../WhoToFollow/WhoToFollow";

const RightMenu: React.FC = () => {
  return <div className="rightmenu-container">
    <Search/>
    <News/>
    <WhoToFollow/>
  </div>;
};

export default RightMenu;
