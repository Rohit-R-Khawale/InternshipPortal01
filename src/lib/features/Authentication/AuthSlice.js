"use client"; // This is a client component
import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};
// NOTE: DONT STORE SENSITIVE INFORMATION LIKE PASSWORDS IN REDUX STORE IN REAL APPLICATIONS
// THIS IS JUST FOR DEMONSTRATION PURPOSES
export const counterSlice = createSlice({
  name: "AuthStore",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const user = {
        id:nanoid(),
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
        isAuthenticated: action.payload.isAuthenticated,
        role: action.payload.role,
      };

      state.users.push(user);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.email !== action.payload.email);
    },
    updateUser: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.email === action.payload.email) {
          return { ...user, ...action.payload };
        }
        return user;
      });
    },
    authenticateUser: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.email === action.payload.email && user.password === action.payload.password) {
          return { ...user, isAuthenticated: true };
        }
        return user;
      });
    }

  },
});

// Action creators are generated for each case reducer function
export const { addUser, removeUser, updateUser, authenticateUser } =  counterSlice.actions;

export default counterSlice.reducer;
