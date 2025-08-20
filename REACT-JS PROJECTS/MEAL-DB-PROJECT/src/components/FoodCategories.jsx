import { useEffect, useState } from "react";
import TopFoodCategory from "./TopFoodCategory";

const FoodCateGories = () => {
  const [foodData, setFoodData] = useState([]);
  useEffect(() => {
    Category();
  }, []);
  const Category = async () => {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const json = await data.json();
    console.log(json);
    setFoodData(json?.categories);
  };
  return (
    <div>
      <h2 className="text-center font-bold text-2xl bg-green-700 text-white p-3">
        Top Meal Categories
      </h2>
      <div className=" flex flex-wrap justify-center gap-2 p-2">
        {foodData.map((value) => {
          return <TopFoodCategory key={value.idCategory} foodData={value} />;
        })}
      </div>
    </div>
  );
};

export default FoodCateGories;
