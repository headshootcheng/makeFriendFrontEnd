import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type userState = {
  userId: number;
  username: string;
  email: string;
  provider: string;
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: { userId: -1, username: "Guest", email: "", provider: "Local" },
  reducers: {
    setUserInfo(user, action: PayloadAction<userState>) {
      const { email, provider, userId, username } = action.payload;
      user.email = email;
      user.provider = provider;
      user.userId = userId;
      user.username = username;
    },
  },
});

export const { setUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
