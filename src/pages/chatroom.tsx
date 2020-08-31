import React, { useEffect } from "react";
import "../styles/app.css";
import Header from "../components/chatroom/header";
import MessageContent from "../components/chatroom/messageContent";
import InputField from "../components/chatroom/inputField";
//import io from "socket.io-client";

const Chatroom: React.FC<{}> = () => {
  // useEffect(() => {
  //   const socket = io(`${process.env.REACT_APP_API_URL}`);
  //   console.log("socket", socket);
  //   socket.emit("test", "hi", ({ diu }: any) => {
  //     console.log(diu);
  //   });
  //   socket.emit("disconnect");
  //   socket.off();
  // });

  return (
    <div className=" flex flex-1 flex-col">
      <Header />
      <MessageContent />
      <InputField />
    </div>
  );
};
export default Chatroom;
