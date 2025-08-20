/* eslint-disable react/prop-types */

const TopFoodCategory = (props) => {
  const { foodData } = props;
  return (
    <>
      <div className="w-72 shadow-2xl p-2 rounded-2xl">
        <p className="text-center font-bold text-amber-500">
          {foodData?.strCategory}
        </p>
        <img
          className=" w-52 rounded-2xl mx-auto shadow-2xs cursor-pointer animate-pulse"
          src={foodData?.strCategoryThumb}
        />
      </div>
    </>
  );
};

export default TopFoodCategory;
