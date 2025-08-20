import { useSelector } from "react-redux";
import { selectIncome } from "../store/incomeSlice";
import { selectTotalExpense } from "../store/expenseSlice";

const Balance = () => {
  const income = useSelector(selectIncome);
  const totalExpense = useSelector(selectTotalExpense);
  const balance = income - totalExpense;

  return (
    <div className="w-96 h-[20rem] bg-white text-black dark:bg-gray-950 dark:text-white border border-gray-300  rounded-md p-5 mt-2 shadow-2xl">
      <img className="w-20 rounded-lg mx-auto" src="https://cdn-icons-png.flaticon.com/512/5501/5501525.png"/>
      <h2 className=" font-bold mt-5 text-3xl text-center text-blue-500">
        {" "}
        Balance
      </h2>
      <h3 className=" font-bold text-3xl text-center text-blue-500">
        ₹ {balance}
      </h3>
    </div>
  );
};

export default Balance;
