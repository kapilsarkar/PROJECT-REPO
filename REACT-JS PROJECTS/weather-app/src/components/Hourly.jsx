/* eslint-disable react/prop-types */
import { BsCloudRainFill } from "react-icons/bs";

const Hourly = (props) => {
  const { dayOne } = props;
  const { time, feelslike_c, chance_of_rain } = dayOne;
  return (
    <>
      <div className="each-day">
        <p>{time.slice(10)}</p>
        <img src={dayOne?.condition?.icon} />
        <p>{dayOne?.condition?.text}</p>
        <p>
          <BsCloudRainFill /> {chance_of_rain} %
        </p>
        <p>{feelslike_c}℃</p>
      </div>
    </>
  );
};

export default Hourly;
