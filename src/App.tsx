import "./App.css";
import { BottomNav } from "./components/BottomNav/BottomNav";
import Feed from "./components/Feed/Feed";
import RightMenu from "./components/RightMenu/RightMenu";
import SideNav from "./components/SideNav/SideNav";

function App() {
  return (
    <div className="container">
      <SideNav />
      <Feed />
      <RightMenu />
      <BottomNav />
    </div>
  );
}

export default App;
