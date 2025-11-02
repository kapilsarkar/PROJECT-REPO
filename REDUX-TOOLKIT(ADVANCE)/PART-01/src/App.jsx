import AuthControl from "./components/AuthControl";
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
        <div className="mt-5 py-5">
             <AuthControl/>
        </div>
       
      </div>
    </>
  );
}

export default App;
