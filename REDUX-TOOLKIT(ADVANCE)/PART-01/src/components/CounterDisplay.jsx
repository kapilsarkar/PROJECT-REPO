import { useSelector } from "react-redux";

const CounterDisplay = () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <>
      <div>
        <h2>REDUX-TOOLKIT(ADVANCE)</h2>
        <h2>Count:{count}</h2>
      </div>
    </>
  );
};

export default CounterDisplay;
