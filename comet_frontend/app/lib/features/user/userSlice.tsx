import { User } from "@/app/interfaces/user/user";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
      return action.payload;
    },
    depositFunds: (state, action) => {
      const existingItemIndex = state.accounts.findIndex(
        (account) => account.id === action.payload.id
      );
      console.log(action.payload);
      if (existingItemIndex !== -1) {
        state.accounts[existingItemIndex].balance += Number(
          action.payload.amount
        );
        if (!state.accounts[existingItemIndex].transactions) {
          state.accounts[existingItemIndex].transactions = [];
        }
        state.accounts[existingItemIndex].transactions?.push({
          id: action.payload.id,
          type: action.payload.transferType,
          amount: action.payload.amount,
          date: new Date().toISOString(),
          description: action.payload.transferType + " made",
        });
      }
    },
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
        if (!state.accounts[existingItemIndex].transactions) {
          state.accounts[existingItemIndex].transactions = [];
        }
        state.accounts[existingItemIndex].transactions.push({
          id: action.payload.id,
          type: action.payload.transferType,
          amount: action.payload.amount,
          date: new Date().toISOString(),
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
        if (!state.accounts[existingItemIndex].transactions) {
          state.accounts[existingItemIndex].transactions = [];
        }
        state.accounts[existingItemIndex].transactions.push({
          id: action.payload.id,
          type: action.payload.transferType,
          amount: action.payload.amount,
          date: new Date().toISOString(),
          description: action.payload.transferType + " made",
        });
      }
    },
    // registrationSuccess: (state, action: PayloadAction<string>) => {
    //   state.loading = false;
    //   state.token = action.payload;
    //   state.error = null;
    // },
    // registrationFailure(state, action: PayloadAction<string>) {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
  },
});

export const {
  getUser,
  depositFunds,
  transferToAccount,
  withdrawFromAccount,
  addProduct,
} = userSlice.actions;

export default userSlice.reducer;
