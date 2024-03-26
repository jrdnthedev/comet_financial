import { TransactionType } from "@/app/utils/constants";

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  date: Date;
  description: string;
}
