import { useDispatch, useSelector } from "react-redux";

import { increment, decrement } from "../slices/counterSlice";
const Counter = () => {
  const dispatch = useDispatch();

  const selector = useSelector((state) => state.counter.count);
  return (
    <>
      <div className="mt-2">
        <h2 className=" text-3xl font-bold">Count:{selector}</h2>
        <button className="px-6 py-3 bg-green-600 text-white font-bold rounded-md" onClick={() => dispatch(increment())}>+</button>
        <button className="px-6 py-3 bg-red-600 text-white font-bold rounded-md" onClick={() => dispatch(decrement())}>-</button>
      </div>
    </>
  );
};

export default Counter;
