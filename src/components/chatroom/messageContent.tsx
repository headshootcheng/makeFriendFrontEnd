import React from "react";
import "../../styles/app.css";
import MessageBox from "./messageBox";
const MessageContent: React.FC<{}> = () => {
  return (
    <div className="flex-1 bg-yellow-800 overflow-auto">
      <MessageBox speakerName="test" speakerId={0} message="hi" />
      <MessageBox speakerName="test2" speakerId={0} message="hi" />
    </div>
  );
};
export default MessageContent;
