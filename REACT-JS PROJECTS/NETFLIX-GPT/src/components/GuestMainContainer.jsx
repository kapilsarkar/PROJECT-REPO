import { useSelector } from "react-redux";
import VideoBackGroundTv from "./VideoBackGroundTv";
import TvVideoTitle from "./TvVideoTitle";

const GuestMainContainer = () => {
  const tv = useSelector((store) => store.tv?.popularTvShows);

  if (!tv || tv.length === 0) return null;

  const mainTv = tv[1] || {};
  //console.log("Main TV:", mainTv); // Debugging log

  const { original_name = "No Title", overview = "", id } = mainTv;

  if (!id) {
    //console.warn("No TV ID found for main TV show");
    return null;
  }

  return (
    <div className="w-full   relative">
      <VideoBackGroundTv tvId={id} />
      <TvVideoTitle name={original_name} overview={overview} />
    </div>
  );
};

export default GuestMainContainer;
