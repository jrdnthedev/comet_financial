import { User } from "@/app/interfaces/user/user";
import { AccountType, TransactionType } from "@/app/utils/constants";
import { createSlice } from "@reduxjs/toolkit";

const initialState: User = {
  id: "1",
  firstName: "admin",
  lastName: "admin",
  email: "example.com",
  password: "password",
  accounts: [
    {
      id: 0,
      type: AccountType.Savings,
      balance: 1000000,
      number: 2342342434325,
      transactions: [
        {
          id: 1,
          type: TransactionType.Deposit,
          amount: 250000,
          date: new Date("January 17, 2024 03:24:00"),
          description: "Deposit made",
        },
        {
          id: 2,
          type: TransactionType.Transfer,
          amount: 250000,
          date: new Date("January 19, 2024 03:24:00"),
          description: "Transfer made",
        },
        {
          id: 3,
          type: TransactionType.Transfer,
          amount: 250000,
          date: new Date("January 20, 2024 03:24:00"),
          description: "Transfer made",
        },
        {
          id: 4,
          type: TransactionType.Deposit,
          amount: 250000,
          date: new Date("January 21, 2024 03:24:00"),
          description: "Deposit made",
        },
      ],
    },
    {
      id: 1,
      type: AccountType.Checking,
      balance: 100000,
      number: 2349082434545,
      transactions: [
        {
          id: 1,
          type: TransactionType.Payment,
          amount: 25000,
          date: new Date("March 10, 2024 03:24:00"),
          description: "Payment made",
        },
        {
          id: 2,
          type: TransactionType.Payment,
          amount: 25000,
          date: new Date("March 13, 2024 03:24:00"),
          description: "Payment made",
        },
        {
          id: 3,
          type: TransactionType.Withdrawal,
          amount: 192.0,
          date: new Date("March 14, 2024 03:24:00"),
          description: "Withdrawal made",
        },
        {
          id: 4,
          type: TransactionType.Deposit,
          amount: 25000,
          date: new Date("March 25, 2024 03:24:00"),
          description: "Deposit made",
        },
        {
          id: 5,
          type: TransactionType.Deposit,
          amount: 25000,
          date: new Date("March 27, 2024 03:24:00"),
          description: "Deposit made",
        },
      ],
    },
    {
      id: 2,
      type: AccountType.TSFA,
      balance: 100000,
      number: 2342832439695,
      transactions: [
        {
          id: 1,
          type: TransactionType.Deposit,
          amount: 25000,
          date: new Date("January 17, 2024 03:24:00"),
          description: "Deposit made",
        },
        {
          id: 2,
          type: TransactionType.Payment,
          amount: 25000,
          date: new Date("January 20, 2024 03:24:00"),
          description: "Payment made",
        },
        {
          id: 3,
          type: TransactionType.Transfer,
          amount: 25000,
          date: new Date("January 23, 2024 03:24:00"),
          description: "Transfer made",
        },
        {
          id: 4,
          type: TransactionType.Deposit,
          amount: 25000,
          date: new Date("February 17, 2024 03:24:00"),
          description: "Deposit made",
        },
      ],
    },
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
