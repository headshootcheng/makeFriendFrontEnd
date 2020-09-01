import React from "react";
import { useSelector } from "react-redux";
import "../../styles/app.css";
import { RootState } from "../../redux";
const MessageBox: React.FC<{
  speakerName: string;
  speakerId: number;
  message: string;
}> = ({ speakerName = "guest", message = "", speakerId = 0 }) => {
  const { userId, username } = useSelector(
    (state: RootState) => state.userInfo
  );

  const isSpeaker = speakerName === username;

  return (
    <div>
      {isSpeaker ? (
        <div className=" flex flex-row mx-4 my-8">
          <div className="flex-1" />
          <div className="flex-col">
            <div className=" bg-green-700 h-16 rounded-lg flex px-4 items-center justify-center flex-wrap  text-white">
              <span>{message}</span>
            </div>
            <span className="text-sm">{speakerName}</span>
          </div>
        </div>
      ) : (
        <div className=" flex flex-row mx-4 my-8">
          <div className="flex flex-col">
            <div className="bg-blue-400  h-16 rounded-lg flex px-4 items-center justify-center flex-wrap  text-white">
              <span>{message}</span>
            </div>
            <span className="text-sm text-right">{speakerName}</span>
          </div>
        </div>
      )}
    </div>
  );
};
export default MessageBox;
