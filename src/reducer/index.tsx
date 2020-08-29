import { combineReducers } from "@reduxjs/toolkit";
import roomReducer from "./slice/roomSlice";
import userReducer from "./slice/userSlice";

const rootReducer = combineReducers({
  roomInfo: roomReducer,
  userInfo: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
