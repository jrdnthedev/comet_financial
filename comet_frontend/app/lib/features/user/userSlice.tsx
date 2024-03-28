import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      id: 1,
      firstName: "admin",
      lastName: "admin",
      email: "example.com",
      password: "password",
      accounts: ["savings", "checking", "tsfa", "credit card"],
      createdAt: Date(),
      lastLoginAt: Date(),
    },
    isLoggedIn: false,
    token: "",
  },
  reducers: {
    getUser: (state) => {},
    addUser: (state) => {},
    deleteUser: (state) => {},
  },
});

export const { getUser, addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
