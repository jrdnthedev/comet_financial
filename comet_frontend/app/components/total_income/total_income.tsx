import changeToCurrency from "@/app/utils/changeNumberToCurrencyUtil";
import Chart from "../chart/chart";
import { AccountProps } from "@/app/interfaces/account/account";

export default function TotalIncome(bal: AccountProps) {
  const calculateIncome = (accounts: AccountProps) => {
    let balance = 0;
    accounts.data.map((item) => {
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
        <p>{calculateIncome(bal)}</p>
      </div>
      <div>
        <Chart height={100} />
      </div>
    </div>
  );
}
