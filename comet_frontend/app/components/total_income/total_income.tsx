import changeToCurrency from "@/app/utils/changeNumberToCurrencyUtil";
import Chart from "../chart/chart";

export default function TotalIncome() {
  return (
    <div className="rounded-md shadow-sm inline-block sm:w-96 p-3 border-2">
      <div>
        <h3>Total Income</h3>
        <p>August 2023</p>
      </div>
      <div className="mb-5">
        <p>{changeToCurrency(300000)}</p>
      </div>
      <div>
        <Chart height={100} />
      </div>
    </div>
  );
}
