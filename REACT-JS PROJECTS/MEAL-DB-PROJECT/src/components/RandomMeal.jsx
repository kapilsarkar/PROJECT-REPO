import { useEffect, useState } from "react";
import TopRandomMeal from "./TopRandomMeal";

const RandomMeal = () => {
  const [foodData, setFoodData] = useState([]);
  useEffect(() => {
    randomSearch();
  }, []);
  const randomSearch = async () => {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const json = await data.json();
    console.log(json);
    setFoodData(json?.meals);
  };
  return (
    <>
      <h2 className="text-center font-bold text-2xl bg-green-700 text-white p-3">
        Full Meal Details
      </h2>
      <div className="flex flex-wrap justify-center gap-2 p-2 ">
        {foodData.map((value) => {
          return (
            <TopRandomMeal key={value.idMeal} foodData={value}/>
          );
        })}
      </div>
    </>
  );
};

export default RandomMeal;
