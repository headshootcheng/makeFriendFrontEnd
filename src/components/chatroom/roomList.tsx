import React from "react";
import "../../styles/app.css";
import ChatRoomCard from "./chatRoomCard";
const RoomList: React.FC<{ switchToRoom: () => void }> = ({ switchToRoom }) => {
  return (
    <div className="flex-1 bg-white overflow-auto">
      <ChatRoomCard name="New Group" switchToRoom={switchToRoom} />
      <ChatRoomCard name="Old Group" switchToRoom={switchToRoom} />
    </div>
  );
};
export default RoomList;
