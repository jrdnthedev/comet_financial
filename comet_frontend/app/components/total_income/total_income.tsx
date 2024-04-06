import changeToCurrency from "@/app/utils/changeNumberToCurrencyUtil";
import { AccountProps } from "@/app/interfaces/account/account";
import SmallLineChart from "../line_chart/line_chart";

export default function TotalIncome(account: AccountProps) {
  const calculateIncome = (accounts: AccountProps) => {
    let balance = 0;
    accounts.data?.map((item) => {
      balance += item.balance;
    });
    return changeToCurrency(balance);
  };
  return (
    <div className="rounded-md shadow-sm inline-block sm:w-96 p-3 border-2">
      <div>
        <h3>Total Income</h3>
        <p>August 2023</p>
      </div>
      <div className="mb-5">
        <p>{calculateIncome(account)}</p>
      </div>
      <div>
        <SmallLineChart height={200} data={account.data} />
      </div>
    </div>
  );
}
