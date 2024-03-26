"use client";
import Account from "@/app/components/accounts/accounts";
import User from "@/app/components/user/user";

export default function DashBoard() {
  return (
    <>
      <h1 className="mb-3">Dashboard</h1>
      <div>
        <User />
        <Account />
      </div>
    </>
  );
}
