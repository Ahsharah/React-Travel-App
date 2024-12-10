import { createSlice } from '@reduxjs/toolkit';

const destinationsSlice = createSlice({
  name: 'destinations',
  initialState: [],
  reducers: {
    addDestination: (state, action) => {
      state.push(action.payload);
    },
    toggleVisited: (state, action) => {
      const destination = state.find(dest => dest.id === action.payload);
      if (destination) {
        destination.visited = !destination.visited;
      }
    },
    deleteDestination: (state, action) => {
      return state.filter(dest => dest.id !== action.payload);
    },
  },
});

export const { addDestination, toggleVisited, deleteDestination } = destinationsSlice.actions;
export default destinationsSlice.reducer;
