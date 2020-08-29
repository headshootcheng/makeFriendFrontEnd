import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type roomState = {
  name: string;
};

const roomInfoSlice = createSlice({
  name: "roomInfo",
  initialState: { name: "New Room" },
  reducers: {
    setCurrentRoomName(room, action: PayloadAction<string>) {
      //console.log(action, room);
      const { payload } = action;
      room.name = payload;
      //return room;
    },
  },
});

export const { setCurrentRoomName } = roomInfoSlice.actions;

export default roomInfoSlice.reducer;
