import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import io, { Socket } from "socket.io-client";

type roomState = {
  name: string;
  owner: string;
};

const roomInfoSlice = createSlice({
  name: "roomInfo",
  initialState: {
    name: "New Room",
    owner: "Guest",
    refresh: false,
    getMessage: false,
    ws: Socket,
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
  },
});

export const { setCurrentRoomInfo, connectToSocket } = roomInfoSlice.actions;

export default roomInfoSlice.reducer;
