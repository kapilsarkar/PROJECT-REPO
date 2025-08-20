import Body from "./components/Body";
import { Route, Routes } from "react-router-dom";
import MealInfo from "./components/MealInfo";
function App() {
  return (
    <>
      <h2 className=" bg-green-700 text-white p-3 text-center font-bold">
        RECIPE APP
      </h2>

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/:idMeal" element={<MealInfo />} />
      </Routes>
    </>
  );
}

export default App;
