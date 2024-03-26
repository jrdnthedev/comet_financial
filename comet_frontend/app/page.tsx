"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/accounts/");

        if (response.ok) {
          const data = await response.json();
          setAccounts(data);
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    };
    fetchData();
  });
  return (
    <>
      <h1>Home Page</h1>
      {[...accounts].map((account: any, index) => (
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
