/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealInfo = () => {
  const [data, setData] = useState();
  const { idMeal } = useParams();
  useEffect(() => {
    getRecipe();
  }, [idMeal]);
  const getRecipe = async () => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
    const json = await data.json();
    setData(json?.meals[0]);
  };

  return (
    <>
      {!data ? (
        "No Data Found"
      ) : (
        <div className="">
          <h2 className="text-center font-bold text-2xl bg-green-700 text-white p-3">
            Recipe Details
          </h2>
          <h3 className="text-center text-2xl p-2 font-bold text-amber-600">
            {data.strMeal}
          </h3>
          <img
            className=" w-96 rounded-2xl mx-auto shadow-2xl cursor-pointer animate-pulse"
            src={data.strMealThumb}
          />
          <h3 className="font-bold text-blue-900 text-2xl text-center p-2">
            Ingredients:
          </h3>
          <div className=" grid grid-cols-2 gap-2 font-bold text-center text-blue-900 p-2">
            <p>{data.strIngredient1}</p>
            <p>{data.strIngredient2}</p>
            <p>{data.strIngredient3}</p>
            <p>{data.strIngredient4}</p>
            <p>{data.strIngredient5}</p>
            <p>{data.strIngredient6}</p>
            <p>{data.strIngredient7}</p>
            <p>{data.strIngredient8}</p>
            <p>{data.strIngredient9}</p>
          </div>
          <p className="font-bold p-2 text-center text-amber-500 text-xl">
            Meal Name:{data.strCategory}
          </p>
          <p className="font-bold p-2 text-center text-amber-500 text-xl">
            Area Name:{data.strArea}
          </p>
          <p className="font-bold p-2 text-center text-amber-500 ">
            Instructions{data.strInstructions}
          </p>
        </div>
      )}
    </>
  );
};

export default MealInfo;
