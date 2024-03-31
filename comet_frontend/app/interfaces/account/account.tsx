import { AccountType } from "@/app/utils/constants";
import { Transaction } from "../transaction/transaction";

export interface Account {
  id: string;
  type: AccountType;
  number: number;
  balance: number;
  transactions: Transaction[];
}
