import { Account } from "../account/account";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  accounts: Account[];
  createdAt: Date;
  lastLoginAt: Date;
  token: string;
}
