import React, { useEffect, useState } from "react";
import "../../styles/app.css";
import ChatRoomCard from "./chatRoomCard";
import { useSelector } from "react-redux";
import axios from "axios";
import { RootState } from "../../redux";
const RoomList: React.FC<{}> = () => {
  const [roomList, setRoomList] = useState<any[]>([]);

  const { refreshRoomList } = useSelector(
    (state: RootState) => state.dashBoard
  );

  const { keyword } = useSelector((state: RootState) => state.search);

  const obtainRoomList = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/getRoomInfo`,
      {}
    );
    //console.log(data);
    setRoomList(data.roomList);
  };

  useEffect(() => {
    obtainRoomList();
  }, [refreshRoomList]);

  const filterRoomList = roomList.filter(
    ({ room_name }) => room_name.substring(0, keyword.length) === keyword
  );

  return (
    <div className="flex-1 bg-white overflow-auto">
      {filterRoomList.map(({ room_name, room_owner, room_ownerId }, index) => {
        return (
          <ChatRoomCard
            name={room_name}
            owner={room_owner}
            ownerId={room_ownerId}
          />
        );
      })}
    </div>
  );
};
export default RoomList;
