import React from "react";
import "../../styles/app.css";
import MessageBox from "./messageBox";
const MessageContent: React.FC<{ messageList: any[] }> = ({ messageList }) => {
  return (
    <div className="flex-1 bg-yellow-800 overflow-auto">
      {messageList.map(({ username, userId, text }) => {
        return (
          <MessageBox
            speakerName={username}
            speakerId={userId}
            message={text}
          />
        );
      })}
    </div>
  );
};
export default MessageContent;
