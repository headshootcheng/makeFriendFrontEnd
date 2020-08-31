import React from "react";
import "../../styles/app.css";
const Welcome: React.FC<{}> = () => {
  return (
    <div className=" hidden md:flex md:flex-1  bg-gray-400  items-center justify-center flex-col">
      <span className=" text-2xl">Welcome to FriendChat !!!</span>
      <span className="text-xl"> Please create a room and chat</span>
    </div>
  );
};
export default Welcome;
