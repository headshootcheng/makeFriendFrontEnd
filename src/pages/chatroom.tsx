import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/app.css";
import Header from "../components/chatroom/header";
import MessageContent from "../components/chatroom/messageContent";
import InputField from "../components/chatroom/inputField";
import { RootState } from "../redux";
import {
  updateMessageList,
  clearMessageList,
  updateUserList,
} from "../redux/slice/roomSlice";
const Chatroom: React.FC<{}> = () => {
  //const [messageList, setMessageList] = useState<any[]>([]);
  const { name, ws } = useSelector((state: RootState) => state.roomInfo);
  const { userId, username } = useSelector(
    (state: RootState) => state.userInfo
  );
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("join", name);
    ws.emit("join", { name, userId, username });
    dispatch(clearMessageList());
  }, [userId, name, username]);

  useEffect(() => {
    //console.log("Get Message");
    ws.on("message", (message: any) => {
      console.log("updateMessage", message);
      dispatch(updateMessageList(message));
    });
    ws.on("room_info", (userList: any[]) => {
      console.log("updateUserList", userList);
      dispatch(updateUserList(userList));
    });
  }, [ws]);

  const sendMessage = (text: string) => {
    console.log("send Message");
    ws.emit("sendMessage", { userId, text });
    //refreshMessage(!getMessage);
  };

  return (
    <div className=" flex flex-1 flex-col">
      <Header />
      <MessageContent />
      <InputField sendMessage={sendMessage} />
    </div>
  );
};
export default Chatroom;
