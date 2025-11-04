import { useSelector } from "react-redux";

const CounterDisplay = () => {
  const count = useSelector((state) => state.counter.count);
  return (
    <>
      <div className=" mt-2 px-3 py-5 ">
        <h2 className=" text-3xl font-bold text-center ">
          Counter Display Component
        </h2>
        <h3 className="text-center font-bold mt-5 text-3xl">Count:{count}</h3>
        <input type="number" className=""/>
      </div>
    </>
  );
};

export default CounterDisplay;
