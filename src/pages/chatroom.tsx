import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../styles/app.css";
import Header from "../components/chatroom/header";
import MessageContent from "../components/chatroom/messageContent";
import InputField from "../components/chatroom/inputField";
import { RootState } from "../redux";

const Chatroom: React.FC<{}> = () => {
  const [messageList, setMessageList] = useState<any[]>([]);
  const { name, ws } = useSelector((state: RootState) => state.roomInfo);
  const { userId, username } = useSelector(
    (state: RootState) => state.userInfo
  );

  useEffect(() => {
    //console.log("join", name);
    ws.emit("join", { name, userId, username });
    setMessageList([]);
  }, [userId, name, username]);

  useEffect(() => {
    //console.log("Get Message");
    ws.on("message", (message: any) => {
      //console.log("updateMessage", message);
      setMessageList([...messageList, message]);
    });
  });

  const sendMessage = (text: string) => {
    console.log("send Message");
    ws.emit("sendMessage", { userId, text });
    //refreshMessage(!getMessage);
  };

  return (
    <div className=" flex flex-1 flex-col">
      <Header />
      <MessageContent messageList={messageList} />
      <InputField sendMessage={sendMessage} />
    </div>
  );
};
export default Chatroom;
