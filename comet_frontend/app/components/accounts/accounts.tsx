import { useEffect, useState } from "react";
import { Account } from "../../interfaces/account/account";

export default function Account() {
  const [accounts, setAccounts] = useState([]);
  const account_endpoint = "http://127.0.0.1:8000/accounts/";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(account_endpoint);

        if (response.ok) {
          const data = await response.json();
          setAccounts(data);
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    };
    fetchData();
  }, [account_endpoint]);

  return (
    <>
      <h1>accounts component</h1>
      {accounts.map((account: Account, index: number) => (
        <div key={index}>
          <h2>
            {account.type}:{""}
            {account.id}
          </h2>
          <p>{account.balance}</p>
        </div>
      ))}
    </>
  );
}
