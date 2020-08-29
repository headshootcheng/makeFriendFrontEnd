import { combineReducers } from "@reduxjs/toolkit";
import roomReducer from "./slice/roomSlice";
import userReducer from "./slice/userSlice";
import dashBoardReducer from "./slice/dashboardSlice";

const rootReducer = combineReducers({
  roomInfo: roomReducer,
  userInfo: userReducer,
  dashBoard: dashBoardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
