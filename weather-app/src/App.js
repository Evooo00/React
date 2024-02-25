import React, { useState } from "react";
import "./App.css";

function App() {
  const apiKey = "68bf05d3e52da8d9caee03e995b1e65b";
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (e) => {
    if (e.key == "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`,
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setCity("");
        });
    }
  };
  return (
    <div className="container">
      <input
        className="searchInput"
        placeholder="Search..."
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      />

      {typeof weatherData.main === "undefined" ? (
        <div>Welcome! Search for your city and check your weather!</div>
      ) : (
        <div className="weatherContainer">
          <p className="cityName">{weatherData.name}</p>
          <p className="temperature">
            {(Math.round(weatherData.main.temp) - 30) / 2} C
          </p>
          <p className="weather">{weatherData.weather[0].main}</p>
        </div>
      )}
    </div>
  );
}

export default App;
