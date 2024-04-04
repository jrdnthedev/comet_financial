import { AccountType } from "@/app/utils/constants";
import { Transaction } from "../transaction/transaction";

export interface Account {
  id: number;
  type: AccountType;
  number: number;
  balance: number;
  transactions: Transaction[];
}

export interface AccountProps {
  data: Account[];
}
