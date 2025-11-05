import CounterControl from "./components/CounterControl";
import CounterDisplay from "./components/CounterDisplay";

function App() {
  return (
    <>
      <div className="bg-green-200 min-h-screen">
        <h2 className=" text-center text-3xl font-bold px-3 py-2 text-violet-600">
          Counter App
        </h2>
        <CounterDisplay />
        <CounterControl />
      </div>
    </>
  );
}

export default App;
