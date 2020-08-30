import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchKeyword",
  initialState: { keyword: "" },
  reducers: {
    setKeyword(state, action: PayloadAction<string>) {
      const keyword = action.payload;
      state.keyword = keyword;
    },
  },
});

export const { setKeyword } = searchSlice.actions;
export default searchSlice.reducer;
