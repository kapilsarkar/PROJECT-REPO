import { useDispatch, useSelector } from "react-redux";
import { resetIncome } from "../store/incomeSlice";
import { resetExpense, selectTotalExpense } from "../store/expenseSlice";

const ResetValue = () => {
  const dispatch = useDispatch();
  const income = useSelector((state) => state.income.income);
  const expenses = useSelector((state) => state.expense.expenses);
  const totalExpense = useSelector(selectTotalExpense);
  const handleResetIncome = () => {
    dispatch(resetIncome());
  };
  const handleResetExpenses = () => {
    dispatch(resetExpense());
  };
  return (
    <>
      <div className="w-full bg-white pb-10 text-black dark:bg-gray-950 dark:text-white pt-2">
        <h2 className=" p-3 text-center mt-2 text-2xl font-bold">
          Reset Value
        </h2>
        <div className=" flex flex-wrap justify-center gap-3">
          <div className=" border rounded-md border-black dark:border-white  p-3 shadow-lg">
            <img
              className=" w-52 p-2 rounded-md"
              src="https://cdn-icons-gif.flaticon.com/16072/16072637.gif"
            />
            <button
              className=" w-52 px-2 py-1 sm:py-2 bg-red-500 text-white font-semibold rounded-md"
              onClick={handleResetIncome}
            >
              Reset Income
            </button>
            <p className="text-center font-bold text-black dark:text-white">
              Income :{income}
            </p>
            {income === 0 ? (
              <p className="text-center font-bold text-black dark:text-white">
                Income Reset.
              </p>
            ) : (
              <p className="text-center font-bold text-black dark:text-white">
                Income Not Reset.
              </p>
            )}
          </div>
          <div className=" border rounded-md border-black dark:border-white  p-3 shadow-lg">
            <img
              className=" w-52 p-2 rounded-md"
              src="https://media.lordicon.com/icons/wired/flat/2531-recurring-cash.gif"
            />
            <button
              className=" w-52 px-2 py-1 sm:py-2 bg-red-500 text-white font-semibold rounded-md"
              onClick={handleResetExpenses}
            >
              Reset Expenses
            </button>
            <p className="text-center font-bold text-black dark:text-white">
              Total Expenses : {totalExpense}
            </p>
            {expenses.length === 0 ? (
              <p className="text-center font-bold text-black dark:text-white">
                Expenses Reset.
              </p>
            ) : (
              expenses.map((exp) => (
                <li className="list-none" key={exp.id}>
                  <p className=" font-bold text-center">Expense Amount: ₹{exp.amount}</p>
                </li>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetValue;
