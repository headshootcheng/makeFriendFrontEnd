import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type roomState = {
  name: string;
  owner: string;
};

const roomInfoSlice = createSlice({
  name: "roomInfo",
  initialState: { name: "New Room", owner: "Guest" },
  reducers: {
    setCurrentRoomName(room, action: PayloadAction<roomState>) {
      //console.log(action, room);
      const { name, owner } = action.payload;
      room.name = name;
      room.owner = owner;
      //return room;
    },
  },
});

export const { setCurrentRoomName } = roomInfoSlice.actions;

export default roomInfoSlice.reducer;
