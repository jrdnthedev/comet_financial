"use client";
import AccountNavbar from "@/app/components/account_info_navbar/account_info_navbar";
import Accounts from "@/app/components/accounts/accounts";
import Chart from "@/app/components/chart/chart";
import EmptyData from "@/app/components/empty_data/empty_data";
import LoadingSpinner from "@/app/components/loading_spinner/loading_spinner";
import TotalIncome from "@/app/components/total_income/total_income";
import Transactions from "@/app/components/transactions/transactions";
import { Account } from "@/app/interfaces/account/account";
import { useAppSelector } from "@/app/lib/hooks";
import { RootState } from "@/app/lib/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashBoard() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const store = useAppSelector((state) => state.userData.accounts);
  const router = useRouter();
  const { loading, error, token } = useAppSelector(
    (state: RootState) => state.login
  );

  useEffect(() => {
    const fetchData = () => {
      setAccounts(store);
    };
    fetchData();
    if (!token) {
      router.push("/");
    }
  }, [router, token, store]);

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <AccountNavbar />
      <section className="flex px-3 gap-2 mb-3 flex-col md:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <Accounts />
        </div>
        <TotalIncome data={accounts} />
      </section>
      <section className="flex flex-col lg:flex-row gap-2 px-3 ">
        <div className="rounded-md shadow-sm inline-block flex-1 p-3 border-2">
          {accounts.length ? (
            <Chart height={400} data={accounts} />
          ) : (
            <EmptyData message="no account data" />
          )}
        </div>
      </section>
    </div>
  );
}
