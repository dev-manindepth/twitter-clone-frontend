import React, { Suspense } from "react";
import "./App.css";
import { ColorRing } from "react-loader-spinner";
import BottomNav  from "./components/BottomNav/BottomNav";
import Feed from "./components/Feed/Feed";
import RightMenu from "./components/RightMenu/RightMenu";
import SideNav from "./components/SideNav/SideNav";

// const SideNav = React.lazy(() => import("./components/SideNav/SideNav"));
// const Feed = React.lazy(() => import("./components/Feed/Feed"));
// const RightMenu = React.lazy(() => import("./components/RightMenu/RightMenu"));
// const BottomNav = React.lazy(() => import("./components/BottomNav/BottomNav"));

function App() {
  return (
    <div className="container">
      <SideNav />
      <Suspense fallback={<ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#8ec8ef", "#8ec8ef", "#8ec8ef", "#8ec8ef", "#8ec8ef"]}
      />}>
      <Feed />
      </Suspense>
      <RightMenu />
      <BottomNav />
    </div>
  );
}

export default App;
