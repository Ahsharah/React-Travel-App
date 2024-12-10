import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  destinations: [], // List of destinations will live here
};

const destinationsSlice = createSlice({
  name: 'destinations',
  initialState,
  reducers: {
    // Action to add a new destination
    addDestination: (state, action) => {
      state.destinations.push(action.payload);
    },
    // Action to toggle visited status
    toggleVisited: (state, action) => {
      const destination = state.destinations.find(
        (dest) => dest.id === action.payload
      );
      if (destination) {
        destination.visited = !destination.visited;
      }
    },
  },
});

export const { addDestination, toggleVisited } = destinationsSlice.actions;
export default destinationsSlice.reducer;
