import { Link } from "react-router-dom";
import { MaleCloth } from "../Images/Image";
import { FemaleCloth } from "../Images/Image";
import { Shoes } from "../Images/Image";
import { ShoesWomen } from "../Images/Image";
import { Jewelry } from "../Images/Image";
const ShoppingMenu = () => {
  return (
    <div className="w-full  mt-10 dark:bg-gray-900 dark:text-white text-black bg-white p-2">
      <div className=" mt-5 p-2 flex flex-wrap justify-center">
        <div className="relative w-[46rem] sm:w-[42rem] p-2">
          <img
            className="w-full shadow-2xl rounded-2xl"
            src={MaleCloth}
            alt="Men's Clothing"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Link to="/men">
              <h3 className="text-white text-3xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded animate-zoomIn">
                MEN'S
              </h3>
            </Link>
          </div>
        </div>
        <div className="relative w-[46rem] sm:w-[42rem] p-2">
          <img
            className="w-full shadow-2xl rounded-2xl"
            src={FemaleCloth}
            alt="Men's Clothing"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Link to="/women">
              <h3 className="text-white text-3xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded animate-zoomIn">
                WOMEN'S
              </h3>
            </Link>
          </div>
        </div>
      </div>
      <div className=" mt-2 p-2 flex flex-wrap justify-center">
        <div className="relative w-[46rem] sm:w-[42rem] p-2">
          <img
            className="w-full shadow-2xl h-[20rem] rounded-2xl"
            src={Shoes}
            alt="Men's Clothing"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Link to="/shoeMen">
              <h3 className="text-white text-3xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded animate-zoomIn">
                MEN'S
              </h3>
            </Link>
          </div>
        </div>
        <div className="relative w-[46rem] sm:w-[42rem]  p-2">
          <img
            className="w-full shadow-2xl h-[20rem] rounded-2xl"
            src={ShoesWomen}
            alt="Men's Clothing"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Link to="/shoeWoMen">
              <h3 className="text-white text-3xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded animate-zoomIn">
                WOMEN'S
              </h3>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full -mt-5">
        <div className="mt-1 p-2 flex flex-wrap justify-center">
          <div className="relative w-[46rem] sm:w-[42rem] p-2">
            <img
              className="w-full shadow-2xl  rounded-2xl"
              src={Jewelry}
              alt="Men's Clothing"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Link to="/jewel">
                <h3 className="text-white text-3xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded animate-zoomIn">
                  JEWELRY
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingMenu;
