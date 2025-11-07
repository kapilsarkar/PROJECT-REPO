import AuthControl from "./components/AuthControl";
import Counter from "./components/Counter";
import CounterControl from "./components/CounterControl";
import CounterDisplay from "./components/CounterDisplay";
import UserComponent from "./components/UserComponent";

function App() {
  return (
    <>
      <div>
        <Counter />
        <CounterDisplay />
        <CounterControl />
        <div className="mt-5 py-5">
          <AuthControl />
        </div>
        <UserComponent />
      </div>
    </>
  );
}

export default App;
