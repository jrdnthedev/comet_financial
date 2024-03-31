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
      id: "1",
      type: AccountType.Savings,
      balance: 100000,
      number: 2342342434325,
      transactions: [
        {
          id: 1,
          type: TransactionType.Deposit,
          amount: 192.0,
          date: Date(),
          description: "Deposit made",
        },
        {
          id: 2,
          type: TransactionType.Payment,
          amount: 192.0,
          date: Date(),
          description: "Payment made",
        },
        {
          id: 3,
          type: TransactionType.Transfer,
          amount: 192.0,
          date: Date(),
          description: "Transfer made",
        },
        {
          id: 4,
          type: TransactionType.Deposit,
          amount: 192.0,
          date: Date(),
          description: "Deposit made",
        },
      ],
    },
    {
      id: "2",
      type: AccountType.Checking,
      balance: 100000,
      number: 2349082434545,
      transactions: [
        {
          id: 1,
          type: TransactionType.Payment,
          amount: 192.0,
          date: Date(),
          description: "Payment made",
        },
        {
          id: 2,
          type: TransactionType.Payment,
          amount: 192.0,
          date: Date(),
          description: "Payment made",
        },
        {
          id: 3,
          type: TransactionType.Withdrawal,
          amount: 192.0,
          date: Date(),
          description: "Withdrawal made",
        },
        {
          id: 4,
          type: TransactionType.Deposit,
          amount: 192.0,
          date: Date(),
          description: "Deposit made",
        },
      ],
    },
    {
      id: "3",
      type: AccountType.TSFA,
      balance: 100000,
      number: 2342832439695,
      transactions: [
        {
          id: 1,
          type: TransactionType.Deposit,
          amount: 192.0,
          date: Date(),
          description: "Deposit made",
        },
        {
          id: 2,
          type: TransactionType.Payment,
          amount: 192.0,
          date: Date(),
          description: "Payment made",
        },
        {
          id: 3,
          type: TransactionType.Transfer,
          amount: 192.0,
          date: Date(),
          description: "Transfer made",
        },
        {
          id: 4,
          type: TransactionType.Deposit,
          amount: 192.0,
          date: Date(),
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
  },
});

export const { getUser, addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
