import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice.js';

export const store = configureStore({
  reducer: {
    students: userReducer,
  },
});

export default store;
