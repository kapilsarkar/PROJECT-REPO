import { useState } from "react";
import Balance from "./Balance";
import Expense from "./Expense";
import Income from "./Income";
import { useDispatch } from "react-redux";
import { addIncome } from "../store/incomeSlice";
import { addExpense } from "../store/expenseSlice";
import PieChartComponent from "./PieChartComponent";
const Home = () => {
  const [incomeInput, setIncomeInput] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const handleAddExpense = (e) => {
    e.preventDefault();

    // Trim to prevent whitespace-only inputs
    if (!title.trim() || !amount || !category.trim()) {
      alert("Please fill in all fields before adding an expense.");
      return;
    }

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert("Please enter a valid amount greater than 0.");
      return;
    }

    //Dispatch to Redux
    dispatch(addExpense({ title, amount: parseFloat(amount), category }));

    setTitle("");
    setAmount("");
    setCategory("");
  };

  const handleResetExpense = (e) => {
    e.preventDefault();
    setTitle("");
    setAmount("");
    setCategory("");
  };

  const handleAddIncome = (e) => {
    e.preventDefault();
    const amount = parseFloat(incomeInput);
    if (!isNaN(amount) && amount > 0) {
      dispatch(addIncome(amount));
      setIncomeInput("");
    }
  };

  const handleReset = () => {
    setIncomeInput("");
  };

  return (
    <div className="w-full bg-white text-black dark:bg-gray-950 dark:text-white pt-2">
      <div className=" flex justify-center flex-wrap gap-3 p-3">
        <Income />
        <div className=" w-72  sm:w-96 mt-2 border rounded-md border-white  p-3 shadow-lg">
          <h2 className=" text-center font-bold ">Income/Expense Chart</h2>
          <PieChartComponent />
        </div>
        <Balance />
      </div>
      <div className=" w-full flex flex-wrap justify-center">
        <Expense />
      </div>

      <div className="w-full flex justify-center flex-wrap gap-2 sm:p-5 bg-white text-black dark:bg-gray-950 dark:text-white">
        <form
          onSubmit={handleAddIncome}
          className=" w-96 sm:w-96 mt-2 border rounded-md border-white  p-3 shadow-lg"
        >
          <p className=" font-bold text-center">Add Income/Budget</p>

          <input
            type="number"
            value={incomeInput}
            onChange={(e) => setIncomeInput(e.target.value)}
            placeholder="Add Income/Budget"
            className=" mt-2 p-1 sm:p-3  shadow-md font-semibold rounded-md bg-white text-black dark:bg-gray-800 dark:text-white"
          />

          <div className=" flex flex-wrap justify-between gap-2 mt-2">
            <button
              type="submit"
              className=" px-2 py-1 sm:px-3 sm:py-2 bg-blue-500 text-white font-semibold rounded-md"
            >
              Add Income
            </button>
            <button
              onClick={handleReset}
              className=" px-2 py-1 bg-red-500 text-white font-semibold rounded-md"
            >
              Reset
            </button>
          </div>
        </form>
        <form
          onSubmit={handleAddExpense}
          className=" w-96 sm:w-96 mt-2 border rounded-md border-white  p-3 shadow-lg"
        >
          <p className=" font-bold text-center mt-2">Add Expense</p>
          <p className=" font-bold">Title</p>
          <input
            type="text"
            placeholder="Ex: Car Payments"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=" mt-2 p-1 sm:p-3  shadow-md font-semibold rounded-md bg-white text-black dark:bg-gray-800 dark:text-white"
          />
          <p className=" font-bold">Amount</p>
          <input
            type="number"
            placeholder="Ex: 2000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className=" mt-2 p-1 sm:p-3  shadow-md font-semibold rounded-md bg-white text-black dark:bg-gray-800 dark:text-white"
          />
          <p className=" font-bold mt-2 ">Add a Category To Your Expense</p>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-2 p-1 sm:p-3 shadow-md font-semibold rounded-md bg-white text-black dark:bg-gray-800 dark:text-white"
          >
            <option value="">Select Category</option>
            <option value="Groceries">Groceries</option>
            <option value="Recharge">Recharge</option>
            <option value="Utilities">Utilities</option>
            <option value="Transport">Transport</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
          <div className=" mt-2 flex flex-wrap gap-1">
            <button className=" px-2 py-1 sm:px-3 sm:py-2 bg-blue-500 text-white font-semibold rounded-md">
              Add Expense
            </button>
            <button
              className=" px-2 py-1 sm:py-2 bg-red-500 text-white font-semibold rounded-md"
              onClick={handleResetExpense}
            >
              Reset Expenses
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
