/* eslint-disable react/prop-types */
const TopRandomMeal = (props) => {
  const { foodData } = props;
  return (
    <>
      <div className="font-bold">
        <p className="text-center text-xl text-amber-500">
          Meal Name:{foodData?.strMeal}
        </p>
        <p className="text-center text-xl text-amber-500 mt-1.5">
          {" "}
          Meal Category:{foodData?.strCategory}
        </p>
        <img
          className=" w-96 rounded-2xl mx-auto shadow-2xl cursor-pointer animate-pulse"
          src={foodData?.strMealThumb}
        />
        <p className="text-center p-1.5">
          {" "}
          Instructions:{foodData?.strInstructions}
        </p>
      </div>
    </>
  );
};

export default TopRandomMeal;
