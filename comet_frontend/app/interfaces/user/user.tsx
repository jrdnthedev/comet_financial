import { Account } from "../account/account";

export interface User {
  id: string;
  firstName: string; // First name of the user
  lastName: string; // Last name of the user
  email: string; // Email address of the user
  password: string; // Hashed password of the user
  accounts: Account[]; // Array of accounts associated with the user
  createdAt: Date; // Timestamp indicating when the user account was created
  lastLoginAt: Date; // Timestamp indicating when the user last logged in
  // Add additional fields as needed (e.g., profile picture, security questions)
}
