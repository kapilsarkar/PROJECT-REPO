import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./slices/counterSlice";

function App() {
  const dispatch = useDispatch();

  const selector = useSelector((state) => state.counter.count);
  return (
    <>
      <h2>REDUX-TOOLKIT(ADVANCE)</h2>
      <h2>Count:{selector}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
}

export default App;
