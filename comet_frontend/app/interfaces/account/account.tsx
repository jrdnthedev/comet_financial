import { AccountType } from "@/app/utils/constants";
import { Transaction } from "../transaction/transaction";

export interface Account {
  id: string;
  type: AccountType;
  balance: number;
  transactions: Transaction[];
}
