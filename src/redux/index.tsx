import { combineReducers } from "@reduxjs/toolkit";
import roomReducer from "./slice/roomSlice";
import userReducer from "./slice/userSlice";
import dashBoardReducer from "./slice/dashboardSlice";
import searchReducer from "./slice/searchSlice";

const rootReducer = combineReducers({
  roomInfo: roomReducer,
  userInfo: userReducer,
  dashBoard: dashBoardReducer,
  search: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
