import { TransactionType } from "@/app/utils/constants";
import { Account } from "../account/account";

export interface Transaction {
  id: number;
  type: TransactionType;
  amount: number;
  date: Date;
  description: string;
}

export interface TransactionProps {
  data: Account;
}
