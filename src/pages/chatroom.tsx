import React from "react";
import "../styles/app.css";
import Header from "../components/chatroom/header";
import MessageBox from "../components/chatroom/messageBox";
const Chatroom: React.FC<{}> = () => {
  return (
    <div className=" flex flex-1 flex-col">
      <Header />
      <div className="flex-1 bg-yellow-800 overflow-auto"></div>
      <MessageBox />
    </div>
  );
};
export default Chatroom;
