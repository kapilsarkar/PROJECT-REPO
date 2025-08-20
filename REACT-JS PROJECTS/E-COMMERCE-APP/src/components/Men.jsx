import { useEffect, useState } from "react";
import { MENS_CLOTHING } from "../utils/constant";
import { FcRating } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../utils/cartSlice";
import { toast } from "react-toastify";

const Men = () => {
  const [showMen, setShowMen] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const handleAddToCart = (item) => {
    const isItemAlreadyInCart = cartItems.find(
      (cartItem) => cartItem.id === item.id
    );
    if (isItemAlreadyInCart) {
      toast.warning("Item already in cart!");
    } else {
      dispatch(addItems(item));
      toast.success("Item added to cart!");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(MENS_CLOTHING);
      const json = await data.json();
      //console.log(json);
      setShowMen(json);
    } catch (err) {
      console.error("Failed to fetch men's Cloth:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleTopRated = () => {
    const topRated = showMen.filter((men) => men.rating.rate >= 4.1);
    topRated.length <= 1 ? fetchData() : setShowMen(topRated);
  };

  return (
    <div className="w-full  mt-10 dark:bg-gray-900 dark:text-white text-black bg-white p-2">
      <h2 className=" text-center bg-red-500 text-white text-2xl shadow-lg mt-5 p-3 font-bold">
        Men's
      </h2>
      <div className=" flex mt-2 p-3 flex-wrap gap-3 justify-center">
        <button
          onClick={handleTopRated}
          className="mt-2 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition-colors duration-300"
        >
          Top Rated
        </button>
        <button
          onClick={fetchData}
          className="mt-2 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition-colors duration-300"
        >
          All
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          showMen.map((m) => {
            return (
              <div
                key={m?.id}
                className="w-60 mt-5 p-3 shadow-lg rounded bg-white dark:bg-gray-900"
              >
                <div className="p-3 mt-10 shadow-2xl">
                  <img
                    src={m?.image}
                    alt={m?.title}
                    className="w-full h-64  object-cover rounded"
                  />

                  <p className="font-semibold">
                    {m.title.length > 20
                      ? m.title.slice(0, 20) + "..."
                      : m.title}
                  </p>
                  <div className=" flex p-1">
                    <FcRating className=" mt-1" />
                    <p className=" font-bold ml-1">{m.rating.rate}</p>
                  </div>
                  <p className=" mt-2 font-bold">₹ {m.price}</p>
                  <button
                    onClick={() => handleAddToCart(m)}
                    className="mt-2 py-2 px-2 bg-red-500 text-white font-semibold rounded-md"
                  >
                    Add To cart
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Men;
