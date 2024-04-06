import { Account } from "@/app/interfaces/account/account";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Chart(props: any) {
  const data: {}[] = [];

  props.data?.forEach((account: Account, index: number) => {
    const transactionData = {
      name: account.type,
      value: account.balance,
    };
    data.push(transactionData);
  });

  return (
    <div className="">
      <h2 className="mb-2">Expense Chart</h2>
      <ResponsiveContainer height={props.height} width="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" name="Accounts" />
          <YAxis dataKey="value" name="Amount" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
