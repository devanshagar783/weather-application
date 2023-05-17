import React, { useRef, useState } from "react";
import axios from "axios";
import apiKeys from "../../apiKeys.js";
import "./index.css";
import { SearchOutlined } from "@mui/icons-material";

const Search = () => {
    const query = useRef("");
    const [weather, setWeather] = useState({});

    function onSearch() {
        console.log("dddd", query.current.value);
        axios
            .get(
                `${apiKeys.base}weather?q=${query.current.value}&units=metric&APPID=${apiKeys.key}`
            )
            .then((res) => {
                setWeather(res?.data);
                console.log("devansh res", res);
            })
            .catch(function (err) {
                console.log(err);
                setWeather({});
            });
    }

    return (
        <div className="search-container">
            Search bar
            <div className="search-box">
                <input
                    ref={query}
                    type="text"
                    className="search-input"
                    placeholder="Search city"
                />
                <SearchOutlined
                    onClick={() => {
                        onSearch();
                    }}
                />
            </div>
            {weather?.main && (
                <div>
                    {" "}
                    <li>
                        <p>
                            {weather.name}, {weather.sys.country}
                        </p>
                        <img
                            className="temp"
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                        />
                    </li>
                    <li>
                        Temperature{" "}
                        <span>
                            {Math.round(weather.main.temp)}°c (
                            {weather.weather[0].main})
                        </span>
                    </li>
                    <li>
                        Humidity{" "}
                        <span className="temp1">
                            {Math.round(weather.main.humidity)}%
                        </span>
                    </li>
                    <li>
                        Visibility{" "}
                        <span className="temp1">
                            {Math.round(weather.visibility)} mi
                        </span>
                    </li>
                    <li>
                        Wind Speed{" "}
                        <span className="temp1">
                            {Math.round(weather.wind.speed)} Km/h
                        </span>
                    </li>
                </div>
            )}
        </div>
    );
};

export default Search;
