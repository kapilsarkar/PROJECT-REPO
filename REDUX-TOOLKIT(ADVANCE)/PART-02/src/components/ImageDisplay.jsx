import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../utils/photoSlice";

const ImageDisplay = () => {
  const dispatch = useDispatch();
  const { photos, loading, error } = useSelector((state) => state.photos);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const products = photos?.carts?.flatMap((cart) => cart.products) || [];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error}</p>;

  if (!products.length) {
    return (
      <div className="w-full text-center py-6">
        <h2 className="text-3xl font-extrabold text-purple-600">
          Image Display Using Redux Async Thunk
        </h2>
        <p className="mt-2 text-gray-600">No products found.</p>
      </div>
    );
  }

  return (
    <>
      <div className="w-full">
        <h2 className=" text-center text-3xl font-extrabold text-purple-600">
          Image Display Using Redux Async Thunk
        </h2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-2">
          {products?.map((product, index) => {
            return (
              <div
                key={index}
                className="border rounded-lg shadow p-3 flex flex-col items-center"
              >
                <h3 className="font-semibold">{product?.title}</h3>
                <img
                  className="border p-3 rounded-lg shadow-lg w-48 h-48 object-cover"
                  src={product?.images?.[0] || product?.thumbnail}
                  alt={product?.title}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ImageDisplay;
