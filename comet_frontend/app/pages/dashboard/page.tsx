"use client";
import AccountNavbar from "@/app/components/account_info_navbar/account_info_navbar";
import Account from "@/app/components/accounts/accounts";

export default function DashBoard() {
  return (
    <section>
      <AccountNavbar />
      <div>
        <Account />
      </div>
    </section>
  );
}
