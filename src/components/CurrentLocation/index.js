import React, { useEffect, useRef, useState } from "react";
import apiKeys from "../../apiKeys.js";
import ReactAnimatedWeather from "react-animated-weather";
import loading from "../../assets/sunny_weather.gif";
import "./index.css";
import DateTime from "../DateTime/index.js";
import Search from "../Search/index.js";

const CurrentLocation = () => {
    const [localData, setLocalData] = useState({});
    const [weatherIcon, setWeatherIcon] = useState("");

    console.log("dev data", localData, weatherIcon);
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const apiCall = await fetch(
                        `${apiKeys.base}weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&APPID=${apiKeys.key}`
                    );
                    const data = await apiCall.json();
                    console.log("data obj", data);
                    setLocalData({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                        city: data.name,
                        country: data.sys.country,
                        celciusTemp: data.main.temp,
                        farenheitTemp: data.main.temp * 1.8 + 32,
                        humidity: data.main.humidity,
                        main: data.weather[0].main,
                        sunrise: data.sys.sunrise,
                        sunset: data.sys.sunset,
                    });
                    switch (data.weather[0].main) {
                        case "Haze":
                            setWeatherIcon("CLEAR_DAY");
                            break;
                        case "Clouds":
                            setWeatherIcon("CLOUDY");
                            break;
                        case "Rain":
                            setWeatherIcon("RAIN");
                            break;
                        case "Snow":
                            setWeatherIcon("SNOW");
                            break;
                        case "Dust":
                            setWeatherIcon("WIND");
                            break;
                        case "Drizzle":
                            setWeatherIcon("SLEET");
                            break;
                        case "Fog":
                            setWeatherIcon("FOG");
                            break;
                        case "Smoke":
                            setWeatherIcon("FOG");
                            break;
                        case "Tornado":
                            setWeatherIcon("WIND");
                            break;
                        default:
                            setWeatherIcon("CLEAR_DAY");
                    }
                },
                (err) => {
                    console.log("Error callback", err);
                },
                (opts) => {
                    console.log("Options", opts);
                }
            );
        }
    }, []);

    return (
        <div className="loader-container">
            {localData?.celciusTemp ? (
                <div className="main-container">
                    <div className="home-container">
                        <div className="temp-location">
                            <div className="temp-container">
                                {localData.celciusTemp}°<span>C</span>
                            </div>
                            <div className="user-location-div">
                                <h2>{localData?.city}</h2>
                                <h3>{localData?.country}</h3>
                            </div>
                        </div>
                        <ReactAnimatedWeather
                            icon={weatherIcon}
                            color={"black"}
                            size={112}
                            animate={true}
                        />
                        <div className="time-container">
                            <DateTime />
                        </div>
                    </div>
                    <Search />
                </div>
            ) : (
                <>
                    {/* <div className="loader-container"> */}

                    <img className="load-img" src={loading} alt="loading" />
                    <h2>Detecting your location</h2>
                    <p>
                        Please allow the application access to your location as
                        it helps us in calculating real time weather
                    </p>
                </>
                // {/* </div> */}
            )}
        </div>
    );
};

export default CurrentLocation;
