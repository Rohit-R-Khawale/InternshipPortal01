"use client"; // This is a client component
import { configureStore } from '@reduxjs/toolkit'
// Redux store configuration (Single Source of Truth)
import authReducer from '../features/Authentication/AuthSlice';
export const store = configureStore({
  reducer: {authReducer},
})