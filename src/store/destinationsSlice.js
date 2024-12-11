import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDestinations, addDestination } from '../api/destinationAPI';

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchDestinations = createAsyncThunk(
  'destinations/fetchDestinations',
  async () => {
    const response = await getDestinations();
    return response;
  }
);

export const postDestination = createAsyncThunk(
  'destinations/postDestination',
  async (newDestination) => {
    const response = await addDestination(newDestination);
    return response;
  }
);

const destinationsSlice = createSlice({
  name: 'destinations',
  initialState,
  reducers: {
    removeDestination: (state, action) => {
      state.items = state.items.filter((destination) => destination.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDestinations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDestinations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchDestinations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(postDestination.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export const { removeDestination } = destinationsSlice.actions;
export default destinationsSlice.reducer;
