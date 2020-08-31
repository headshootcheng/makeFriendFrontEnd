import { createSlice } from "@reduxjs/toolkit";

type dashboardState = {
  chatMode: boolean;
  refreshRoomList: boolean;
};

const dashBoardSlice = createSlice({
  name: "dashboard",
  initialState: { chatMode: false, refreshRoomList: false },
  reducers: {
    openChatMode(dashboard) {
      dashboard.chatMode = true;
    },
    closeChatMode(dashboard) {
      dashboard.chatMode = false;
    },
    setRefresh(dashboard) {
      dashboard.refreshRoomList = !dashboard.refreshRoomList;
    },
  },
});

export const {
  openChatMode,
  closeChatMode,
  setRefresh,
} = dashBoardSlice.actions;

export default dashBoardSlice.reducer;
