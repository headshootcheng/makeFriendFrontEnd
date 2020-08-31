import React from "react";
import "../styles/app.css";
import Header from "../components/chatroom/header";
import Content from "../components/chatroom/content";
import MessageBox from "../components/chatroom/messageBox";
const Chatroom: React.FC<{}> = () => {
  return (
    <div className=" flex flex-1 flex-col">
      <Header />
      <Content />
      <MessageBox />
    </div>
  );
};
export default Chatroom;
