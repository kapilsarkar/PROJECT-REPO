import { useDispatch, useSelector } from "react-redux";
import { setAmount } from "../utils/counterSlice";

const CounterDisplay = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.count);
  const amount = useSelector((state) => state.counter.amount);
  return (
    <>
      <div className=" mt-2 px-3 py-5 ">
        <h2 className=" text-3xl font-bold text-center text-red-600">
          Counter Display
        </h2>
        <h3 className="text-center font-bold mt-5 text-3xl text-blue-600">Count:{count}</h3>
        <div className=" w-96 px-2 py-3 mx-auto">
          <h3 className="text-center font-bold mt-5 text-3xl text-purple-500">
            Increment/Decrement By Your Desired Number
          </h3>
          <input
            type="number"
            value={amount}
            onChange={(e) => dispatch(setAmount(e.target.value))}
            className="px-2 shadow-2xl font-bold ml-20 mt-5 py-3 border text-center border-gray-600 rounded-md"
          />
        </div>
      </div>
    </>
  );
};

export default CounterDisplay;
