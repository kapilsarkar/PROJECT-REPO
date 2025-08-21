/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/tvSlice";

const useTvTrailer = (tvId) => {
  const dispatch = useDispatch();
 
  const getTvVideos = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/tv/119051/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      //console.log(json?.results);

      const filterData = json.results.filter((video) => video?.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];

      //console.log(trailer);
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error("Error fetching TV videos:", error);
    }
  };

  useEffect(() => {
    if (tvId) {
      getTvVideos();
    }
  }, [tvId]);
};

export default useTvTrailer;
