import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import { selectIncome } from "../store/incomeSlice";
import { selectTotalExpense } from "../store/expenseSlice";

const PieChartComponent = () => {
  const income = useSelector(selectIncome);
  const totalExpense = useSelector(selectTotalExpense);

  const data = [
    { name: "Income", value: income },
    { name: "Expenses", value: totalExpense },
  ];

  const COLORS = ["#00C49F", "#FF8042"];
  return (
    <>
      <div className="w-full h-64">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default PieChartComponent;
