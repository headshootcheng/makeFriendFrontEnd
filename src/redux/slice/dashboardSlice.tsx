import { createSlice } from "@reduxjs/toolkit";

type dashboardState = {
  chatMode: boolean;
  refreshRoomList: boolean;
};

const dashBoardSlice = createSlice({
  name: "dashboard",
  initialState: {
    chatMode: false,
    refreshRoomList: false,
    refreshDashboard: false,
  },
  reducers: {
    openChatMode(dashboard) {
      dashboard.chatMode = true;
    },
    closeChatMode(dashboard) {
      dashboard.chatMode = false;
    },
    setRefreshRoomList(dashboard) {
      dashboard.refreshRoomList = !dashboard.refreshRoomList;
    },
  },
});

export const {
  openChatMode,
  closeChatMode,
  setRefreshRoomList,
} = dashBoardSlice.actions;

export default dashBoardSlice.reducer;
