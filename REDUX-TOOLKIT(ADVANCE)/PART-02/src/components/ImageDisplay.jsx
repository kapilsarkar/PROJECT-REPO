import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../utils/photoSlice";

const ImageDisplay = () => {
  const dispatch = useDispatch();
  const { photos, loading, error } = useSelector((state) => state.photos);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error}</p>;

  return (
    <>
      <div className="w-full">
        <h2 className=" text-center font-bold text-2xl">
          Image Display Using Redux Async Thunk
        </h2>
        <div className=" mt-2 px-2 py-3">
          {photos?.carts?.map((photo)=>{
            return (
                   <div key={photo?.carts?.id} className="flex justify-center items-center gap-2">
               <img className="w-24 p-2 rounded-md" src={photo?.carts?.products?.thumbnail} alt={photo?.carts?.name}/>
            </div>
            )
          })
            
          }
           
        </div>
      </div>
    </>
  );
};

export default ImageDisplay;
