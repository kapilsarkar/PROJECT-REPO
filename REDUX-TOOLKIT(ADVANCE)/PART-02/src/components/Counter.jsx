import CounterControl from "./CounterControl";
import CounterDisplay from "./CounterDisplay";

const Counter = () => {
  return (
    <>
      <div className=" px-2 py-3">
        <h2 className=" text-center text-3xl font-bold px-3 py-2 text-violet-600">
          Counter App
        </h2>
        <CounterDisplay />
        <CounterControl />
      </div>
    </>
  );
};

export default Counter;
