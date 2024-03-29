"use client";
import AccountNavbar from "@/app/components/account_info_navbar/account_info_navbar";
import Account from "@/app/components/accounts/accounts";
import Chart from "@/app/components/chart/chart";
import Transactions from "@/app/components/transactions/transactions";
import { useAppSelector } from "@/app/lib/hooks";
import { RootState } from "@/app/lib/store";
import { useRouter } from "next/navigation";

export default function DashBoard() {
  const router = useRouter();
  const { loading, error, token } = useAppSelector(
    (state: RootState) => state.login
  );

  if (!token) {
    router.push("/");
    return null;
  }

  return (
    <div>
      <AccountNavbar />
      <section className="flex px-3 gap-2 mb-3">
        <Account />
      </section>
      <section className="flex gap-2 px-3 ">
        <Chart />
        <Transactions />
      </section>
    </div>
  );
}
