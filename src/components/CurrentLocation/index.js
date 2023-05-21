import React, { useEffect, useState } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import loadingImg from "../../assets/loadingGif.gif";
import "./index.css";
import DateTime from "../DateTime/index.js";
import Search from "../Search/index.js";
import { fetchCurrLocation } from "../../utils/index.js";

const CurrentLocation = () => {
    const [loading, setLoading] = useState(true);
    const [localData, setLocalData] = useState({});
    const [weatherIcon, setWeatherIcon] = useState("");

    // console.log("dev data", localData, weatherIcon);
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const data = await fetchCurrLocation(position.coords);
                    console.log("data obj2", data);
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
                        icon: data.weather[0].icon,
                        desc: data.weather[0].description,
                    });
                    setLoading(false);
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

                    // const forecast = await fetchForecast(position.coords.latitude, position.coords.longitude)
                    // console.log("forecst curr", forecast);
                    // const fodata = forecast.json();
                    // console.log("forecasr data f", fodata);
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
        <>
            {loading && !localData?.celciusTemp ? (
                <div className="loader-center">
                    <div className="loader-container">
                        <img
                            className="load-img"
                            src={loadingImg}
                            alt="loading"
                        />
                        <h2>Detecting your location</h2>
                        <p>
                            Please allow the application access to your location
                            as it helps us in calculating real time weather
                        </p>
                    </div>
                </div>
            ) : (
                <div className="main-container">
                    <div className="home-container">
                        <h4>{localData.city}</h4>
                        <div className="temperature">
                            <div className="temp-container">
                                {localData.celciusTemp}°<span>C</span>
                            </div>
                            <img
                                src={`https://openweathermap.org/img/wn/${localData.icon}@2x.png`}
                                alt="weathericon"
                            />
                        </div>
                        <p className="temp-desc">{localData.desc}</p>
                        <div className="time-container">
                            <DateTime />
                        </div>
                        <div className="user-location-div">
                            <h2>{localData?.city}</h2>
                            <h3>{localData?.country}</h3>
                        </div>
                    </div>
                    {/* <Search /> */}
                </div>
            )}
            {/* </div> */}
        </>
    );
};

export default CurrentLocation;

//data i have from weather api
// curr date
// feels like
// humidity
// pressure
// curr temp and max, min
// wind speed and degree
// sunrise and sunset
// clouds
// weather icon
// visibility
// minor weather description
//
