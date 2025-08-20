//f97cc3e5fcb7435d869111902241804

//http://api.weatherapi.com/v1/current.json?key=<YOUR_API_KEY>&q=London

const weatherContainer = document.querySelector(".weather-container");
const searchCity = document.getElementById("searchCity");
const searchBtn = document.querySelector(".searchBtn");
const cityName = document.querySelector(".city-name");
const stateName = document.querySelector(".state-name");
const countryName = document.querySelector(".country-name");
const zoneName = document.querySelector(".zone-Name");
const localTime = document.querySelector(".localTime");
const temperature = document.querySelector(".temperature");
const weatherCondn = document.querySelector(".weather-condn");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");
const rain = document.querySelector(".rain");
const weatherIcon = document.querySelector(".weather-icon");
const fellsLike = document.querySelector(".feels_like");

let key = "f97cc3e5fcb7435d869111902241804";

//let url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${searchCity.value}`;

const weather = async () => {
  try {
    const res = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${key}&q=${searchCity.value}`
    );
    const data = await res.json();
    console.log(data);
    cityName.innerHTML = `City Name :${data.location.name}`;
    stateName.innerHTML = `State name: ${data.location.region}`;
    countryName.innerHTML = `Country Name : ${data.location.country}`;
    zoneName.innerHTML = `Zone Name : ${data.location.tz_id}`;
    localTime.innerHTML = `Local Time : ${data.location.localtime}`;

    temperature.innerHTML = `Temperature : ${data.current.temp_c} &#8451`;
    weatherCondn.innerHTML = `Weather Condition : ${data.current.condition.text}`;
    humidity.innerHTML = `Humidty : ${data.current.humidity} % <img
    src="./images/humidity.png"
    class="humidityImg"
    alt="humidity"
  />`;
    windSpeed.innerHTML = `Wind Status : ${data.current.wind_kph} km/hr  <img src="./images/wind.png" class="windImg" alt="wind" />`;
    rain.innerHTML = `Rain Status : ${data.current.cloud} <img src="./images/rain.png" class="rainImg" alt="img">`;
    fellsLike.innerHTML = `Fells Like : ${data.current.feelslike_c} &#8451 <img src="./images/feelslike.png" class="feelsImg" alt="img" />`;
    weatherIcon.src = `${data.current.condition.icon}`;
  } catch (err) {
    console.log(err);
  }
};

searchBtn.addEventListener("click", (e) => {
  if (!searchCity.value) {
    alert("Please Enter City Name");
  } else {
    weather();
    weatherThreeDay()
  }
});

const asansol = async () => {
  try {
    const res = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${key}&q=asansol`
    );
    const data = await res.json();
    console.log(data);
    cityName.innerHTML = `City Name :${data.location.name}`;
    stateName.innerHTML = `State name: ${data.location.region}`;
    countryName.innerHTML = `Country Name : ${data.location.country}`;
    zoneName.innerHTML = `Zone Name : ${data.location.tz_id}`;
    localTime.innerHTML = `Local Time : ${data.location.localtime}`;

    temperature.innerHTML = `Temperature : ${data.current.temp_c} &#8451`;
    weatherCondn.innerHTML = `Weather Condition : ${data.current.condition.text}`;
    humidity.innerHTML = `Humidty : ${data.current.humidity} % <img
    src="./images/humidity.png"
    class="humidityImg"
    alt="humidity"
  />`;
    windSpeed.innerHTML = `Wind Status : ${data.current.wind_kph} km/hr  <img src="./images/wind.png" class="windImg" alt="wind" />`;
    rain.innerHTML = `Rain Status : ${data.current.cloud} <img src="./images/rain.png" class="rainImg" alt="img">`;
    fellsLike.innerHTML = `Fells Like : ${data.current.feelslike_c} &#8451 <img src="./images/feelslike.png" class="feelsImg" alt="img" />`;
    weatherIcon.src = `${data.current.condition.icon}`;
  } catch (err) {
    console.log(err);
  }
};

window.addEventListener("load", (e) => {
  asansol();
  threeDayForeCastAsansol();
});
// day1-forcast starts
const day1Date = document.querySelector(".day1-date");
const day1Sunrise = document.querySelector(".day1-sunrise-value");
const day1Sunset = document.querySelector(".day1-sunset-value");
const day1ConditionText = document.querySelector(".day1-condition-text");
const day1ConditionImg = document.querySelector(".day1-condition-img");
const day1AvgTempValue = document.querySelector(".day1-avgtemp-value");
const day1RainValue = document.querySelector(".day1-rainValue");
//day1- forecast ends

//day2-forecast-starts
const day2Date = document.querySelector(".day2-date");
const day2Sunrise = document.querySelector(".day2-sunrise-value");
const day2Sunset = document.querySelector(".day2-sunset-value");
const day2ConditionText = document.querySelector(".day2-condition-text");
const day2ConditionImg = document.querySelector(".day2-condition-img");
const day2AvgTempValue = document.querySelector(".day2-avgtemp-value");
const day2RainValue = document.querySelector(".day2-rainValue");

//day2-forecast-end

//day3-forecast-starts
const day3Date = document.querySelector(".day3-date");
const day3Sunrise = document.querySelector(".day3-sunrise-value");
const day3Sunset = document.querySelector(".day3-sunset-value");
const day3ConditionText = document.querySelector(".day3-condition-text");
const day3ConditionImg = document.querySelector(".day3-condition-img");
const day3AvgTempValue = document.querySelector(".day3-avgtemp-value");
const day3RainValue = document.querySelector(".day3-rainValue");
//day3-forecast-ends


const threeDayForeCastAsansol = async () => {
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=asansol&days=3`
    );

    const data = await res.json();

    console.log(data);
    //forecast day1-data starts---
    day1Date.innerHTML = `<img src="./images/date.png" class="sunriseImg" alt="img">${data.forecast.forecastday[0].date} `;
    day1Sunrise.innerHTML = `<img src="./images/sunrise.png" class="sunriseImg" alt="img"> ${data.forecast.forecastday[0].astro.sunrise}`;
    day1Sunset.innerHTML = `<img src="./images/sunset.png" class="sunriseImg" alt="img"> ${data.forecast.forecastday[0].astro.sunset}`;

    day1ConditionText.innerHTML =
      data.forecast.forecastday[0].day.condition.text;
    day1ConditionImg.src = `${data.forecast.forecastday[0].day.condition.icon}`;
    day1AvgTempValue.innerHTML = `${data.forecast.forecastday[0].day.avgtemp_c} &#8451`;
    day1RainValue.innerHTML = `<img src="./images/rain.png" class="rainImg2" alt="img"> ${data.forecast.forecastday[0].day.daily_chance_of_rain}`;
    //forecast day1-data ends---

    //forecast day2-data starts---
    day2Date.innerHTML = `<img src="./images/date.png" class="sunriseImg" alt="img">${data.forecast.forecastday[1].date} `;
    day2Sunrise.innerHTML = `<img src="./images/sunrise.png" class="sunriseImg" alt="img"> ${data.forecast.forecastday[1].astro.sunrise}`;
    day2Sunset.innerHTML = `<img src="./images/sunset.png" class="sunriseImg" alt="img"> ${data.forecast.forecastday[1].astro.sunset}`;

    day2ConditionText.innerHTML =
      data.forecast.forecastday[1].day.condition.text;
    day2ConditionImg.src = `${data.forecast.forecastday[1].day.condition.icon}`;
    day2AvgTempValue.innerHTML = `${data.forecast.forecastday[1].day.avgtemp_c} &#8451`;
    day2RainValue.innerHTML = `<img src="./images/rain.png" class="rainImg2" alt="img"> ${data.forecast.forecastday[1].day.daily_chance_of_rain}`;
    //forecast day2-data ends---

    //forecast day3-data starts---
    day3Date.innerHTML = `<img src="./images/date.png" class="sunriseImg" alt="img">${data.forecast.forecastday[2].date} `;
    day3Sunrise.innerHTML = `<img src="./images/sunrise.png" class="sunriseImg" alt="img"> ${data.forecast.forecastday[2].astro.sunrise}`;
    day3Sunset.innerHTML = `<img src="./images/sunset.png" class="sunriseImg" alt="img"> ${data.forecast.forecastday[2].astro.sunset}`;

    day3ConditionText.innerHTML =
      data.forecast.forecastday[2].day.condition.text;
    day3ConditionImg.src = `${data.forecast.forecastday[2].day.condition.icon}`;
    day3AvgTempValue.innerHTML = `${data.forecast.forecastday[2].day.avgtemp_c} &#8451`;
    day3RainValue.innerHTML = `<img src="./images/rain.png" class="rainImg2" alt="img"> ${data.forecast.forecastday[2].day.daily_chance_of_rain}`;
    //forecast day3-data ends
  } catch (err) {
    console.log(err);
  }
};

const weatherThreeDay = async()=>{
  try{
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${searchCity.value}&days=3`
    );
    const data = await res.json();  
    console.log(data)

     //forecast day1-data starts---
     day1Date.innerHTML = `<img src="./images/date.png" class="sunriseImg" alt="img">${data.forecast.forecastday[0].date} `;
     day1Sunrise.innerHTML = `<img src="./images/sunrise.png" class="sunriseImg" alt="img"> ${data.forecast.forecastday[0].astro.sunrise}`;
     day1Sunset.innerHTML = `<img src="./images/sunset.png" class="sunriseImg" alt="img"> ${data.forecast.forecastday[0].astro.sunset}`;
 
     day1ConditionText.innerHTML =
       data.forecast.forecastday[0].day.condition.text;
     day1ConditionImg.src = `${data.forecast.forecastday[0].day.condition.icon}`;
     day1AvgTempValue.innerHTML = `${data.forecast.forecastday[0].day.avgtemp_c} &#8451`;
     day1RainValue.innerHTML = `<img src="./images/rain.png" class="rainImg2" alt="img"> ${data.forecast.forecastday[0].day.daily_chance_of_rain}`;
     //forecast day1-data ends---
 
     //forecast day2-data starts---
     day2Date.innerHTML = `<img src="./images/date.png" class="sunriseImg" alt="img">${data.forecast.forecastday[1].date} `;
     day2Sunrise.innerHTML = `<img src="./images/sunrise.png" class="sunriseImg" alt="img"> ${data.forecast.forecastday[1].astro.sunrise}`;
     day2Sunset.innerHTML = `<img src="./images/sunset.png" class="sunriseImg" alt="img"> ${data.forecast.forecastday[1].astro.sunset}`;
 
     day2ConditionText.innerHTML =
       data.forecast.forecastday[1].day.condition.text;
     day2ConditionImg.src = `${data.forecast.forecastday[1].day.condition.icon}`;
     day2AvgTempValue.innerHTML = `${data.forecast.forecastday[1].day.avgtemp_c} &#8451`;
     day2RainValue.innerHTML = `<img src="./images/rain.png" class="rainImg2" alt="img"> ${data.forecast.forecastday[1].day.daily_chance_of_rain}`;
     //forecast day2-data ends---
 
     //forecast day3-data starts---
     day3Date.innerHTML = `<img src="./images/date.png" class="sunriseImg" alt="img">${data.forecast.forecastday[2].date} `;
     day3Sunrise.innerHTML = `<img src="./images/sunrise.png" class="sunriseImg" alt="img"> ${data.forecast.forecastday[2].astro.sunrise}`;
     day3Sunset.innerHTML = `<img src="./images/sunset.png" class="sunriseImg" alt="img"> ${data.forecast.forecastday[2].astro.sunset}`;
 
     day3ConditionText.innerHTML =
       data.forecast.forecastday[2].day.condition.text;
     day3ConditionImg.src = `${data.forecast.forecastday[2].day.condition.icon}`;
     day3AvgTempValue.innerHTML = `${data.forecast.forecastday[2].day.avgtemp_c} &#8451`;
     day3RainValue.innerHTML = `<img src="./images/rain.png" class="rainImg2" alt="img"> ${data.forecast.forecastday[2].day.daily_chance_of_rain}`;
     //forecast day3-data ends
  }
  catch(err){
    console.log(err)
  }
}
