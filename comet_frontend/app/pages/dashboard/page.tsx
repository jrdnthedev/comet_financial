"use client";
import AccountNavbar from "@/app/components/account_info_navbar/account_info_navbar";
import Account from "@/app/components/accounts/accounts";
import Chart from "@/app/components/chart/chart";
import LoadingSpinner from "@/app/components/loading_spinner/loading_spinner";
import TotalIncome from "@/app/components/total_income/total_income";
import Transactions from "@/app/components/transactions/transactions";
import { useAppSelector } from "@/app/lib/hooks";
import { RootState } from "@/app/lib/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashBoard() {
  const router = useRouter();
  const { loading, error, token } = useAppSelector(
    (state: RootState) => state.login
  );

  // useEffect(() => {
  //   if (!token) {
  //     router.push("/");
  //   }
  // }, [router, token]);

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <AccountNavbar />
      <section className="flex px-3 gap-2 mb-3 flex-col md:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <Account />
        </div>
        <TotalIncome />
        <TotalIncome />
      </section>
      <section className="flex flex-col lg:flex-row gap-2 px-3 ">
        <div className="rounded-md shadow-sm mx-2 sm:mx-0 inline-block flex-1 p-3 border-2">
          <Chart height={400} />
        </div>
        <Transactions />
      </section>
    </div>
  );
}
