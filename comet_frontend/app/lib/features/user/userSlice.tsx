import { User } from "@/app/interfaces/user/user";
import { createSlice } from "@reduxjs/toolkit";

const initialState: User = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  accounts: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state = action.payload;
    },
    addUser: (state) => {},
    deleteUser: (state) => {},
    addProduct: (state, action) => {
      state.accounts.push({
        id: action.payload.id,
        type: action.payload.type,
        number: action.payload.number,
        balance: 0,
        transactions: [],
      });
    },
    transferToAccount: (state, action) => {
      const existingItemIndex = state.accounts.findIndex(
        (account) => account.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        state.accounts[existingItemIndex].balance += Number(
          action.payload.amount
        );
        state.accounts[existingItemIndex].transactions.push({
          id: 5,
          type: action.payload.transferType,
          amount: action.payload.amount,
          date: new Date(),
          description: action.payload.transferType + " made",
        });
      }
    },
    withdrawFromAccount: (state, action) => {
      const existingItemIndex = state.accounts.findIndex(
        (account) => account.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        state.accounts[existingItemIndex].balance -= Number(
          action.payload.amount
        );
        state.accounts[existingItemIndex].transactions.push({
          id: 5,
          type: action.payload.transferType,
          amount: action.payload.amount,
          date: new Date(),
          description: action.payload.transferType + " made",
        });
      }
    },
  },
});

export const {
  getUser,
  addUser,
  deleteUser,
  transferToAccount,
  withdrawFromAccount,
  addProduct,
} = userSlice.actions;

export default userSlice.reducer;
