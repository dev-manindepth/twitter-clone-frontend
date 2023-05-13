import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    img: "https://pbs.twimg.com/profile_images/1614470877432938499/VpfrV5sX_x96.jpg",
    username: "Manish Kumar",
    userId: "manish",
  });
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
