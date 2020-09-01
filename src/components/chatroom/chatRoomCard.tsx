import React, { useState } from "react";
import "../../styles/app.css";
import GroupRounded from "@material-ui/icons/GroupRounded";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentRoomInfo,
  connectToSocket,
} from "../../redux/slice/roomSlice";
import { openChatMode } from "../../redux/slice/dashboardSlice";
import { RootState } from "../../redux";
import DeleteChatRoomPopUp from "./deleteChatRoomPopUp";

const ChatRoomCard: React.FC<{
  name: string;
  owner: string;
  ownerId: number;
}> = ({ name = "", owner = "", ownerId = 0 }) => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state: RootState) => state.userInfo);
  const { ws } = useSelector((state: RootState) => state.roomInfo);
  const { chatMode } = useSelector((state: RootState) => state.dashBoard);
  const enterRoom = () => {
    if (chatMode) {
      ws.emit("quitRoom", { userId }, ({ msg }: any) => {
        console.log("msg", msg);
        if (msg === "success") {
          console.log("close socket");
          ws.close();
        }
        dispatch(setCurrentRoomInfo({ name: name, owner: owner }));
        dispatch(connectToSocket());
        dispatch(openChatMode());
      });
    } else {
      dispatch(setCurrentRoomInfo({ name: name, owner: owner }));
      dispatch(connectToSocket());
      dispatch(openChatMode());
    }
  };

  const [deleteChatOpen, setDeleteChatOpen] = useState<boolean>(false);
  return (
    <div className="flex-none border-solid  border-b-2 border-gray-200 bg-white flex flex-col px-4 py-2">
      <div className="flex flex-row">
        <div className="flex-1" />
        <IconButton style={{ outline: "none" }} onClick={enterRoom}>
          <MeetingRoomIcon
            style={{ height: 30, width: 30 }}
            className=" text-gray-700"
          />
        </IconButton>
      </div>
      <div className="flex flex-row ">
        <GroupRounded
          style={{ height: 40, width: 40 }}
          className="bg-black text-white rounded-full p-2"
        />
        <span className="text-2xl mx-2">{name}</span>
        <div className="flex-1" />
      </div>
      <div className="flex flex-row">
        <span className=" mx-12 text-gray-600">Host: {owner}</span>
        <div className="flex-1" />
        <IconButton style={{ outline: "none" }}>
          {userId === ownerId ? (
            <DeleteIcon
              style={{ height: 30, width: 30 }}
              className=" text-gray-700"
              onClick={() => setDeleteChatOpen(true)}
            />
          ) : null}
        </IconButton>
      </div>
      <DeleteChatRoomPopUp
        roomName={name}
        open={deleteChatOpen}
        handleClose={() => setDeleteChatOpen(false)}
      />
    </div>
  );
};

export default ChatRoomCard;
