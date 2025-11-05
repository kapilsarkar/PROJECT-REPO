import { useDispatch } from "react-redux";
import { decrement, increment, reset } from "../utils/counterSlice";

const CounterControl = () => {
  const dispatch = useDispatch();
  

  return (
    <>
      <div className=" mt-2 px-3 py-6 flex justify-center gap-2">
        <button
          className="px-2 py-3 rounded-md text-white font-bold bg-green-600"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="px-2 py-3 rounded-md text-white font-bold bg-red-600"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="px-2 py-3 rounded-md text-white font-bold bg-violet-600"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default CounterControl;
