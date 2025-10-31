import Counter from "./components/Counter";
import CounterControl from "./components/CounterControl";
import CounterDisplay from "./components/CounterDisplay";

function App() {
  return (
    <>
      <div>
        <Counter />
        <CounterDisplay />
        <CounterControl />
      </div>
    </>
  );
}

export default App;
