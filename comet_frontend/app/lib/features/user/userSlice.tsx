import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: { name: "test user", id: 1 },
    isLoggedIn: false,
  },
  reducers: {
    getUser: (state) => {},
    addUser: (state) => {},
    deleteUser: (state) => {},
  },
});

export const { getUser, addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
