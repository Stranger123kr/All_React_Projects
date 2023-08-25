import "./WeatherApp.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import clearIcon from "../Assets/clear.png";
import cloudIcon from "../Assets/cloud.png";
import drizzleIcon from "../Assets/drizzle.png";
import humidityIcon from "../Assets/humidity.png";
import rainIcon from "../Assets/rain.png";
import snowIcon from "../Assets/snow.png";
import windIcon from "../Assets/wind.png";
import searchIcon from "../Assets/search.png";

const WeatherApp = () => {
  const [weather, setWeather] = useState({
    main: {},
    wind: {},
    weather: [0],
  });

  const [cityInput, setCityInput] = useState("Delhi");
  const [icon, setIcon] = useState(clearIcon);
  // -----------------------------------------------------------------------------

  const WeatherInformation = async () => {
    try {
      const ApiKey = `217a2d2f6c51916ec6ff1d7e28b758ce`;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=Metric&appid=${ApiKey}`;
      const res = await axios.get(url);
      setWeather(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(weather.weather[0].icon);

  const Search = async () => {
    try {
      const city = document.querySelector("input");
      const cityInput = city.value;
      const ApiKey = `217a2d2f6c51916ec6ff1d7e28b758ce`;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=Metric&appid=${ApiKey}`;
      const res = await axios.get(url);
      setWeather(res.data);
      setCityInput(cityInput);
    } catch (error) {
      console.log(error);
    }

    //  -----------------------------------

    // this is conditional checking

    if (
      weather.weather[0].icon === "01d" ||
      weather.weather[0].icon === "01n"
    ) {
      setIcon(clearIcon);
    } else if (
      weather.weather[0].icon === "02d" ||
      weather.weather[0].icon === "02n"
    ) {
      setIcon(cloudIcon);
    } else if (
      weather.weather[0].icon === "03d" ||
      weather.weather[0].icon === "03n"
    ) {
      setIcon(drizzleIcon);
    } else if (
      weather.weather[0].icon === "04d" ||
      weather.weather[0].icon === "04n"
    ) {
      setIcon(drizzleIcon);
    } else if (
      weather.weather[0].icon === "09d" ||
      weather.weather[0].icon === "09n"
    ) {
      setIcon(rainIcon);
    } else if (
      weather.weather[0].icon === "10d" ||
      weather.weather[0].icon === "10n"
    ) {
      setIcon(rainIcon);
    } else if (
      weather.weather[0].icon === "13d" ||
      weather.weather[0].icon === "13n"
    ) {
      setIcon(snowIcon);
    } else {
      setIcon(clearIcon);
    }
  };

  useEffect(() => {
    WeatherInformation();
  }, []);

  return (
    <>
      <div className="container">
        {/* this is search bar and icon */}
        <div className="top_bar">
          <input
            type="text"
            className="cityInput"
            placeholder="Enter City"
            autoComplete="off"
          />
          <div className="searchIcon" onClick={Search}>
            <img src={searchIcon} alt="searchImg" />
          </div>
        </div>
        {/* this is details part of weather */}

        <div className="weather_img">
          <img src={icon} alt="Weather_image" />
        </div>
        <div className="weather_temp">{weather.main.temp}°C</div>
        <div className="weather_location">{weather.name}</div>
        <data className="data_container">
          <div className="element">
            <img src={humidityIcon} alt="" className="icon" />
            <div className="data">
              <div className="humidity-percent">{weather.main.humidity}%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={windIcon} alt="" className="icon" />
            <div className="data">
              <div className="humidity-percent">{weather.wind.speed} km/h</div>
              <div className="text">wind Speed</div>
            </div>
          </div>
        </data>
      </div>
    </>
  );
};

export default WeatherApp;
