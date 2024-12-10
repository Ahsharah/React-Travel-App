import { createSlice } from "@reduxjs/toolkit";

const destinationsSlice = createSlice({
  name: "destinations",
  initialState: {
    list: [],
  },
  reducers: {
    addDestination: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addDestination } = destinationsSlice.actions;

export default destinationsSlice.reducer;
