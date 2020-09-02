import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

import "../../styles/app.css";
import MessageBox from "./messageBox";
const MessageContent: React.FC<{}> = () => {
  const { messageList, userList } = useSelector(
    (state: RootState) => state.roomInfo
  );
  return (
    <div className="flex-1 bg-yellow-800 overflow-auto">
      {userList.map(({ username, userId }: any) => {
        return (
          <MessageBox speakerName={username} speakerId={userId} message="" />
        );
      })}
    </div>
  );
};
export default MessageContent;
