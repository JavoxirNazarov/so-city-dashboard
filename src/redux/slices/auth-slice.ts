import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "counter",
  initialState: {
    isSignedIn: false,
  },
  reducers: {
    setIsSignedIn: (state, action) => {
      state.isSignedIn = action.payload;
    },
  },
});

export const { setIsSignedIn } = authSlice.actions;
export default authSlice.reducer;
