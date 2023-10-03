import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  perPageData: [],
};

const userperPageData = createSlice({
  name: "userData",
  initialState,
  reducers: {
    userPerPageDetails: (state, action) => {
      //   console.log("state", action.payload);
      state.perPageData = action.payload;
    },
  },
});

export const { userPerPageDetails } = userperPageData.actions;
export default userperPageData.reducer;
