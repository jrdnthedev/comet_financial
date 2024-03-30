import { TransactionType } from "@/app/utils/constants";

export interface Transaction {
  id: number;
  type: TransactionType;
  amount: number;
  date: string;
  description: string;
}
