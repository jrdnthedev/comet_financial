import { useEffect, useState } from "react";
import { Account } from "../../interfaces/account/account";
import { useAppStore } from "@/app/lib/hooks";

export default function Accounts() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const store = useAppStore().getState();
  const account: Account[] = store.userData.accounts;

  useEffect(() => {
    const fetchData = () => {
      setAccounts(account);
    };
    fetchData();
  }, [account]);
  return (
    <>
      {accounts.map((account: Account, index: number) => (
        <div
          className="rounded-md shadow-sm inline-block sm:w-96 p-3 border-2 flex-1"
          key={index}
        >
          <h2>
            {"Account Type: "}
            {account.type}
          </h2>
          <p>
            {"Account Number: "}
            {Number(account.number)}
          </p>
          <p>
            {"Account Balance: "}
            {Number(account.balance).toFixed(2)}
          </p>
        </div>
      ))}
    </>
  );
}
