import React from "react";
import "../../styles/app.css";
import GroupRounded from "@material-ui/icons/GroupRounded";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import { connect } from "react-redux";
import { setRoomInfo } from "../../action";

const ChatRoomCardwithRedux: React.FC<{
  name: string;
  switchToRoom: () => void;
  editRoomName: (input: string) => void;
}> = ({ name = "", switchToRoom, editRoomName }) => {
  const enterRoom = () => {
    editRoomName(name);
    switchToRoom();
  };

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
        <div className="flex-1" />
        <IconButton style={{ outline: "none" }}>
          <DeleteIcon
            style={{ height: 30, width: 30 }}
            className=" text-gray-700"
          />
        </IconButton>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    editRoomName: (input: string) => {
      dispatch(setRoomInfo(input));
    },
  };
};

const ChatRoomCard = connect(null, mapDispatchToProps)(ChatRoomCardwithRedux);

export default ChatRoomCard;
