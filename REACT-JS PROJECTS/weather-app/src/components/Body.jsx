import { useState } from "react";
import { key } from "../utils/constant";
import { FaLocationDot } from "react-icons/fa6";
import { BsCloudRainFill } from "react-icons/bs";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";
import { GiWindpump } from "react-icons/gi";
import { TbUvIndex } from "react-icons/tb";
import { CiCalendarDate } from "react-icons/ci";
import { BsSunriseFill } from "react-icons/bs";
import { BsFillSunsetFill } from "react-icons/bs";
import { CiTempHigh } from "react-icons/ci";
import { GiRaining } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaCalendarDay } from "react-icons/fa6";
import { WiDayWindy } from "react-icons/wi";
import { WiTime10 } from "react-icons/wi";
import Hourly from "./Hourly";
import Hourly2 from "./Hourly";
import Hourly3 from "./Hourly3";

const Body = () => {
  const [searchCity, setSearchCity] = useState("");
  const [weatherLocation, setWeatherLocation] = useState();
  const [weatherCurrent, setWeatherCurrent] = useState();
  const [threeDayWeather, setThreeDatWeather] = useState();
  const [error, setError] = useState(false);

  const ThreeDaySearch = async () => {
    try {
      const threeData = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${searchCity.toLowerCase()}&days=3`
      );
      const jsonThree = await threeData.json();
      console.log(jsonThree);
      setThreeDatWeather(jsonThree.forecast);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const fetchWeather = async () => {
    try {
      setError(false);
      const data = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${key}&q=${searchCity.toLowerCase()}}`
      );
      const json = await data.json();
      console.log(json);
      setWeatherLocation(json.location);
      setWeatherCurrent(json.current);
    } catch (error) {
      setError(true);
      console.log(error);
    }
    ThreeDaySearch();
  };
  if (error) {
    return <h1>Something went wrong</h1>;
  }
  return (
    <>
      <div className="center-container">
        <div className="left-container">
          <h3 className="weather-heading">
            <TiWeatherPartlySunny />
            Weather App
          </h3>
          <div className="search-container">
            <input
              type="text"
              className="input-box"
              placeholder="Enter City Name..."
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
            />

            <button className="searchBtn" onClick={fetchWeather}>
              <FaSearch /> Search
            </button>
          </div>
          <div className="display-part1">
            <h2>{weatherCurrent?.temp_c} ℃</h2>
            <img src={weatherCurrent?.condition?.icon} />
          </div>
          <div className="display-part2">
            <h2>
              Location: <FaLocationDot />
              {weatherLocation?.name}
            </h2>
            <h3>
              Weather Condition : {weatherCurrent?.condition?.text}{" "}
              <TiWeatherPartlySunny />{" "}
            </h3>
            <h3>
              Rain - {weatherCurrent?.cloud}% <BsCloudRainFill />
            </h3>
            <h3>
              Feels Like :{weatherCurrent?.feelslike_c}℃{" "}
              <TiWeatherWindyCloudy />
            </h3>
          </div>
        </div>
        <div className="right-container">
          <h3 className="right-container-menu">Other Highlights</h3>
          <div className="other-weather-details">
            <div className="humidity">
              <h3>Humidity</h3>
              <h3>
                <WiHumidity />
                {weatherCurrent?.humidity} %
              </h3>
              <p>Dew Point: {weatherCurrent?.dewpoint_c}℃</p>
            </div>
            <div className="wind">
              <h3>Wind Status</h3>
              <h3>
                <GiWindpump />
                {weatherCurrent?.wind_kph}km/hr
              </h3>
              <p>Wind Degree: {weatherCurrent?.wind_degree}℃</p>
            </div>
            <div className="uv-index">
              <h3>UV Index</h3>
              <h3>
                <TbUvIndex />
                {weatherCurrent?.uv}
              </h3>
              <p>Heat Index: {weatherCurrent?.heatindex_c}℃</p>
            </div>
          </div>
          <h3 className="location-head">Location Details</h3>
          <div className="location-details">
            <h3>City Name: {weatherLocation?.name}</h3>
            <h3>State Name: {weatherLocation?.region}</h3>
            <h3>Country Name : {weatherLocation?.country}</h3>
            <h3>Zone Name : {weatherLocation?.tz_id}</h3>
            <h3>Local Data/Time: {weatherLocation?.localtime}</h3>
          </div>
        </div>
      </div>
      <div className="three-day-main-container">
        <div className="three-day-container">
          <h3 className="three-day-heading">
            <WiDayWindy /> THREE DAY FORECAST
          </h3>
          <div className="all-three">
            <div className="three-day-details">
              <div className="day-one-date">
                <h3>DAY-01</h3>
                <CiCalendarDate />
                <h3>{threeDayWeather?.forecastday[0]?.date}</h3>
              </div>
              <div className="day-one-sunrise">
                <h3>Sunrise and Sunset</h3>
                <h3>
                  <BsSunriseFill />
                  {threeDayWeather?.forecastday[0].astro.sunrise}
                </h3>
                <h3>
                  <BsFillSunsetFill />
                  {threeDayWeather?.forecastday[0].astro.sunset}
                </h3>
              </div>
              <div className="day-one-condition">
                <h3>Condition</h3>
                <h3>{threeDayWeather?.forecastday[0]?.day?.condition?.text}</h3>
                <img
                  src={threeDayWeather?.forecastday[0]?.day?.condition?.icon}
                />
              </div>
              <div className="day-one-avgTemp">
                <h3>Average Temp.</h3>
                <CiTempHigh />
                <h3>{threeDayWeather?.forecastday[0]?.day?.avgtemp_c}℃</h3>
              </div>
              <div className="day-one-chanceOfRain">
                <h3>Chances of Rain in %</h3>
                <GiRaining />
                <h3>
                  {threeDayWeather?.forecastday[0]?.day?.daily_chance_of_rain}
                </h3>
              </div>
            </div>
            <div className="three-day-details">
              <div className="day-one-date">
                <h3>DAY-02</h3>
                <CiCalendarDate />
                <h3>{threeDayWeather?.forecastday[1]?.date}</h3>
              </div>
              <div className="day-one-sunrise">
                <h3>Sunrise and Sunset</h3>
                <h3>
                  <BsSunriseFill />
                  {threeDayWeather?.forecastday[1].astro.sunrise}
                </h3>
                <h3>
                  <BsFillSunsetFill />
                  {threeDayWeather?.forecastday[1].astro.sunset}
                </h3>
              </div>
              <div className="day-one-condition">
                <h3>Condition</h3>
                <h3>{threeDayWeather?.forecastday[1]?.day?.condition?.text}</h3>
                <img
                  src={threeDayWeather?.forecastday[1]?.day?.condition?.icon}
                />
              </div>
              <div className="day-one-avgTemp">
                <h3>Average Temp.</h3>
                <CiTempHigh />
                <h3>{threeDayWeather?.forecastday[1]?.day?.avgtemp_c}℃</h3>
              </div>
              <div className="day-one-chanceOfRain">
                <h3>Chances of Rain in %</h3>
                <GiRaining />
                <h3>
                  {threeDayWeather?.forecastday[1]?.day?.daily_chance_of_rain}
                </h3>
              </div>
            </div>
            <div className="three-day-details">
              <div className="day-one-date">
                <h3>DAY-03</h3>
                <CiCalendarDate />
                <h3>{threeDayWeather?.forecastday[2]?.date}</h3>
              </div>
              <div className="day-one-sunrise">
                <h3>Sunrise and Sunset</h3>
                <h3>
                  <BsSunriseFill />
                  {threeDayWeather?.forecastday[2].astro.sunrise}
                </h3>
                <h3>
                  <BsFillSunsetFill />
                  {threeDayWeather?.forecastday[2].astro.sunset}
                </h3>
              </div>
              <div className="day-one-condition">
                <h3>Condition</h3>
                <h3>{threeDayWeather?.forecastday[2]?.day?.condition?.text}</h3>
                <img
                  src={threeDayWeather?.forecastday[2]?.day?.condition?.icon}
                />
              </div>
              <div className="day-one-avgTemp">
                <h3>Average Temp.</h3>
                <CiTempHigh />
                <h3>{threeDayWeather?.forecastday[2]?.day?.avgtemp_c}℃</h3>
              </div>
              <div className="day-one-chanceOfRain">
                <h3>Chances of Rain in %</h3>
                <GiRaining />
                <h3>
                  {threeDayWeather?.forecastday[2]?.day?.daily_chance_of_rain}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hourly-container">
        <h3 className="hourly-head">
          {" "}
          <WiTime10 /> HOURLY FORECAST
        </h3>
        <div className="hour-one-container">
          <h3>
            <FaCalendarDay /> DAY-01
          </h3>
          <h3>
            {" "}
            <FaRegCalendarDays /> {threeDayWeather?.forecastday[0].date}
          </h3>
          <div className="hour-one">
            {threeDayWeather?.forecastday[0]?.hour.map((one) => {
              return <Hourly key={one.time} dayOne={one} />;
            })}
          </div>
        </div>
        <div className="hour-one-container">
          <h3>
            <FaCalendarDay /> DAY-02
          </h3>
          <h3>
            {" "}
            <FaRegCalendarDays /> {threeDayWeather?.forecastday[1].date}
          </h3>
          <div className="hour-one">
            {threeDayWeather?.forecastday[1]?.hour.map((one) => {
              return <Hourly2 key={one.time} dayOne={one} />;
            })}
          </div>
        </div>
        <div className="hour-one-container">
          <h3>
            <FaCalendarDay /> DAY-03
          </h3>
          <h3>
            <FaRegCalendarDays /> {threeDayWeather?.forecastday[2].date}
          </h3>
          <div className="hour-one">
            {threeDayWeather?.forecastday[2]?.hour.map((one) => {
              return <Hourly3 key={one.time} dayOne={one} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
