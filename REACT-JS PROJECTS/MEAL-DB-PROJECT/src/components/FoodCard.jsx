import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const FoodCard = ({ detail }) => {
  return (
    <div className=" flex flex-wrap justify-center gap-2  p-2 ">
      {!detail
        ? "Enter Recipe Name"
        : detail.map((currVal) => {
            
            return (
              <>
                <div className=" w-64  shadow-2xl p-3 bg-amber-200">
                  <img
                    className=" w-32 rounded-2xl mx-auto drop-shadow-xl cursor-pointer"
                    src={currVal.strMealThumb}
                  />
                  <p className="font-black text-center">
                    {currVal.strCategory}
                  </p>
                  <p className=" font-bold text-center">{currVal.strMeal}</p>
                  <p className="font-bold text-center">{currVal.strTags}</p>
                  <NavLink to={`/${currVal.idMeal}`}>
                  <button className="w-32 mt-5 flex justify-center text-center bg-green-700 font-bold text-white p-3 rounded-b-sm rounded-t-sm cursor-pointer">
                    Recipe
                  </button>
                  </NavLink>
                 
                </div>
              </>
            );
          })}
    </div>
  );
};

export default FoodCard;
