import { useGetProductsQuery } from "../utils/apiSlice";

const FetchData = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>{error.message}</h2>;

  return (
    <>
      <div className="mt-2 py-3">
        <h2 className=" text-center font-bold text-3xl px-2 py-3 mt-2">
          FetchData Using RTK Query
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {products.map((pr) => (
          <li
            className="flex flex-col items-center bg-white p-3 rounded shadow-sm"
            key={pr.id}
            aria-label={pr.title}
          >
            <div className="w-28 h-28 mb-2 flex items-center justify-center">
              <img
                src={pr.image}
                alt={pr.title || `Product ${pr.id}`}
                loading="lazy"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="text-center">
              <h3 className="text-sm font-medium line-clamp-2">{pr.title}</h3>
              <p className="text-sm font-semibold mt-1">${pr.price}</p>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </>
  );
};

export default FetchData;
