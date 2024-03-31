"use client";
import AccountNavbar from "@/app/components/account_info_navbar/account_info_navbar";
import Accounts from "@/app/components/accounts/accounts";
import { Account } from "@/app/interfaces/account/account";
import LoadingSpinner from "@/app/components/loading_spinner/loading_spinner";
import TotalIncome from "@/app/components/total_income/total_income";
import Transactions from "@/app/components/transactions/transactions";
import { useAppSelector, useAppStore } from "@/app/lib/hooks";
import { RootState } from "@/app/lib/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TabList from "@/app/components/tablist/tablist";

export default function AccountsPage() {
  const router = useRouter();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const store = useAppStore().getState();
  const userAccountData: Account[] = store.userData.accounts;

  const { loading, error, token } = useAppSelector(
    (state: RootState) => state.login
  );

  // useEffect(() => {
  //   if (!token) {
  //     router.push("/");
  //   }
  // }, [router, token]);

  useEffect(() => {
    const fetchData = () => {
      setAccounts(userAccountData);
    };
    fetchData();
  }, [userAccountData]);

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <AccountNavbar />
      <section className="flex px-3 gap-2 mb-3 flex-col md:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <TabList data={accounts} />
        </div>
        <TotalIncome />
      </section>
      <section className="flex px-3 gap-2 mb-3 flex-col md:flex-row"></section>
    </div>
  );
}
