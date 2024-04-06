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

export default function SmallLineChart(props: any) {
  const data: {}[] = [];

  props.data?.forEach((account: Account, index: number) => {
    const transactionData = {
      name: account.type,
      value: account.balance,
    };
    data.unshift(transactionData);
  });

  return (
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
        <XAxis dataKey="name" />
        <YAxis />
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
  );
}
