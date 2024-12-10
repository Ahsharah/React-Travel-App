import { configureStore } from '@reduxjs/toolkit';
import destinationsReducer from './destinationsSlice';

// Configuring the store and including our destinations reducer
const store = configureStore({
  reducer: {
    destinations: destinationsReducer,
  },
});

export default store;
