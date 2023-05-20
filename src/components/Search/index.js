import React, { useContext, useRef, useState } from "react";
import "./index.css";
import { SearchOutlined } from "@mui/icons-material";
import { fetchLocation, fetchLocationPic } from "../../utils";
import { BgContext } from "../../context/context";

const Search = () => {
    const query = useRef("");
    const [weather, setWeather] = useState({});
    const bgCtx = useContext(BgContext);
    const { onBgChange } = bgCtx;

    const onSearch = async () => {
        const search = await fetchLocation(query.current.value);
        setWeather(search);
        const locPic = await fetchLocationPic(query.current.value);
        onBgChange(locPic.results[0].urls.full);
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
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                            alt=''
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
