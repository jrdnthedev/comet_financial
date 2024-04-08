"use client";
import AccountNavbar from "@/app/components/account_info_navbar/account_info_navbar";
import { Account } from "@/app/interfaces/account/account";
import LoadingSpinner from "@/app/components/loading_spinner/loading_spinner";
import { useAppSelector, useAppStore } from "@/app/lib/hooks";
import { RootState } from "@/app/lib/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TabList from "@/app/components/tablist/tablist";
import AccountTransfer from "@/app/components/account_fund_transfer/transfer";

export default function AccountsPage() {
  const router = useRouter();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const store = useAppSelector((state) => state.userData.accounts);

  const { loading, error, token } = useAppSelector(
    (state: RootState) => state.login
  );

  useEffect(() => {
    const fetchData = () => {
      setAccounts(store);
    };
    fetchData();
    // if (!token) {
    //   router.push("/");
    // }
  }, [store, router, token]);

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <AccountNavbar />
      <section className="flex px-3 gap-2 mb-3 flex-col-reverse md:flex-row h-2/5">
        <div className="flex flex-1 flex-col gap-2">
          <TabList data={accounts} />
        </div>
        <AccountTransfer data={accounts} />
      </section>
      <section className="flex px-3 gap-2 mb-3 flex-col md:flex-row"></section>
    </div>
  );
}
