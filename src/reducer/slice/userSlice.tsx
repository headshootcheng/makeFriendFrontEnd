import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type userState = {
  username: string;
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: { username: "Guest" },
  reducers: {
    setUsername(user, action: PayloadAction<string>) {
      const { payload } = action;
      user.username = payload;
    },
  },
});

export const { setUsername } = userInfoSlice.actions;

export default userInfoSlice.reducer;
