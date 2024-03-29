import { useEffect, useState } from "react";
import { Account } from "../../interfaces/account/account";
import { useAppStore } from "@/app/lib/hooks";

export default function Account() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const store = useAppStore().getState();
  const account: Account[] = store.user.accounts;

  useEffect(() => {
    const fetchData = () => {
      setAccounts(account);
    };
    fetchData();
  }, []);
  return (
    <>
      {accounts.map((account: Account, index: number) => (
        <div
          className="rounded-md shadow-sm mx-2 sm:mx-0 inline-block sm:w-96 p-3 border-2"
          key={index}
        >
          <h2>
            {"Account Type: "}
            {account.type}
          </h2>
          <p>
            {"Account Balance: "}
            {account.balance}
          </p>
        </div>
      ))}
    </>
  );
}
