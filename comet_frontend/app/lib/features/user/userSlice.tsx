import { User } from "@/app/interfaces/user/user";
import { AccountType } from "@/app/utils/constants";
import { createSlice } from "@reduxjs/toolkit";

const initialState: User = {
  id: "1",
  firstName: "admin",
  lastName: "admin",
  email: "example.com",
  password: "password",
  accounts: [
    { id: "1", type: AccountType.Savings, balance: 100000 },
    { id: "2", type: AccountType.Checking, balance: 100000 },
    { id: "3", type: AccountType.TSFA, balance: 100000 },
  ],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state) => {
      return state;
    },
    addUser: (state) => {},
    deleteUser: (state) => {},
  },
});

export const { getUser, addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
