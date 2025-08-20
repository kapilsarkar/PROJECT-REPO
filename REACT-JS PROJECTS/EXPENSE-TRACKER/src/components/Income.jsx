import { useSelector } from "react-redux";

const Income = () => {
  const income = useSelector((state) => state.income.income);
  return (
    <>
      <div className="w-96 h-[20rem] bg-white text-black dark:bg-gray-950 dark:text-white border border-gray-300  rounded-md p-5 mt-2 shadow-2xl">
        <img className="w-20 rounded-lg mx-auto" src="https://cdn-icons-png.flaticon.com/512/4599/4599850.png"/>
        <h2 className=" font-bold text-3xl mt-5 text-center text-green-500">
          {" "}
          Income/Budget
        </h2>
        <h3 className=" font-bold text-3xl text-center text-green-500">
          ₹ {income}
        </h3>
      </div>
    </>
  );
};

export default Income;
