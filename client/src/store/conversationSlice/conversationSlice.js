import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  currentPost: {},
};

const conversationslice = createSlice({
  name: "conversations",
  initialState,
  reducers: {
    setCurrentPost: (state, action) => {
      state.currentPost = action.payload;
    },
  },
});

export const { setCurrentPost } = conversationslice.actions;
export default conversationslice.reducer;
