import { useSelector } from "react-redux";
import { selectTotalExpense } from "../store/expenseSlice";

const Expense = () => {
  const expenses = useSelector((state) => state.expense.expenses);
  const totalExpense = useSelector(selectTotalExpense);

  return (
    <div className="w-[74rem]  mx-auto h-auto bg-white text-black dark:bg-gray-900 dark:text-white border border-gray-300  rounded-md p-5 mt-2 shadow-lg">
      <h2 className=" font-bold text-3xl text-center text-red-500"> Expense</h2>
      <h2 className="font-bold text-xl text-center text-red-500">
        Total Expenses:₹ {totalExpense}
      </h2>
      {expenses.length === 0 ? (
        <p className="text-center text-red-500 dark:text-white">
          No expenses yet.
        </p>
      ) : (
        <ul className=" space-y-2 flex flex-wrap gap-2 shadow-2xl">
          {expenses.map((exp) => (
            <li
              key={exp.id}
              className="border bg-blue-500 text-white font-bold mt-2 p-2  rounded-md shadow-md"
            >
              <p className="font-semibold">Title: {exp.title}</p>
              <p>Amount: ₹{exp.amount}</p>
              <p>Category: {exp.category}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Expense;
