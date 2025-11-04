import CounterControl from "./components/CounterControl";
import CounterDisplay from "./components/CounterDisplay";

function App() {
  return (
    <>
      <div>
        <h2 className=" text-center text-3xl font-bold px-3 py-2F">
          Counter App
        </h2>
        <CounterDisplay />
        <CounterControl />
      </div>
    </>
  );
}

export default App;
