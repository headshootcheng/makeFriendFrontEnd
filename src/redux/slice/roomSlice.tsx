import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import io, { Socket } from "socket.io-client";

type roomState = {
  name: string;
  owner: string;
};

type message = {
  username: string;
  userId: number;
  text: string;
};

type userInfo = {
  userId: number;
  username: string;
  room_name: string;
  id: string;
};

const roomInfoSlice = createSlice({
  name: "roomInfo",
  initialState: {
    name: "New Room",
    owner: "Guest",
    refresh: false,
    getMessage: false,
    ws: Socket,
    messageList: [{}],
    userList: [{}],
  },
  reducers: {
    setCurrentRoomInfo(room, action: PayloadAction<roomState>) {
      //console.log(action, room);
      const { name, owner } = action.payload;
      room.name = name;
      room.owner = owner;
    },
    connectToSocket(room) {
      room.ws = io(`${process.env.REACT_APP_API_URL}`);
    },
    updateMessageList(room, action: PayloadAction<message>) {
      //console.log(action.payload);
      room.messageList.push(action.payload);
    },
    clearMessageList(room) {
      room.messageList = [];
    },
    exitRoom(room) {
      room.name = "";
      room.owner = "";
    },
    updateUserList(room, action: PayloadAction<userInfo[]>) {
      room.userList = action.payload;
    },
    clearUserList(room) {
      room.userList = [];
    },
  },
});

export const {
  setCurrentRoomInfo,
  connectToSocket,
  updateMessageList,
  clearMessageList,
  exitRoom,
  updateUserList,
  clearUserList,
} = roomInfoSlice.actions;

export default roomInfoSlice.reducer;
