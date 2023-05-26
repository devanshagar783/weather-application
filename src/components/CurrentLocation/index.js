import React, { useContext, useEffect, useState } from "react";
import loadingImg from "../../assets/loadingGif.gif";
import "./index.css";
import DateTime from "../DateTime/index.js";
import { fetchCurrLocation } from "../../utils/index.js";
import { LocationOnOutlined } from "@mui/icons-material";
import Forecast from "../Forecast";
import Info from "../Info";
import { AppContext } from "../../context/context";

const CurrentLocation = () => {
    const [loading, setLoading] = useState(true);
    const [localData, setLocalData] = useState({});
    // const [weatherIcon, setWeatherIcon] = useState("");
    const appContext = useContext(AppContext);
    const { onLocationChange, onBgChange } = appContext;

    // console.log("dev data", localData, weatherIcon);
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const data = await fetchCurrLocation(position.coords);
                    // console.log("data obj2", data);
                    setLocalData({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                        city: data.name,
                        country: data.sys.country,
                        sunrise: data.sys.sunrise,
                        sunset: data.sys.sunset,
                        celciusTemp: data.main.temp,
                        farenheitTemp: data.main.temp * 1.8 + 32,
                        feelsLike: data.main.feels_like,
                        humidity: data.main.humidity,
                        main: data.weather[0].main,
                        icon: data.weather[0].icon,
                        desc: data.weather[0].description,
                        windSpeed: data.wind.speed,
                        windDeg: data.wind.deg,
                        visibility: data.visibility,
                        pressure: data.main.pressure,
                        clouds: data.clouds.all,
                    });
                    onBgChange(data.name);
                    onLocationChange(
                        position.coords.latitude,
                        position.coords.longitude
                    );
                    setLoading(false);
                    // switch (data.weather[0].main) {
                    //     case "Haze":
                    //         setWeatherIcon("CLEAR_DAY");
                    //         break;
                    //     case "Clouds":
                    //         setWeatherIcon("CLOUDY");
                    //         break;
                    //     case "Rain":
                    //         setWeatherIcon("RAIN");
                    //         break;
                    //     case "Snow":
                    //         setWeatherIcon("SNOW");
                    //         break;
                    //     case "Dust":
                    //         setWeatherIcon("WIND");
                    //         break;
                    //     case "Drizzle":
                    //         setWeatherIcon("SLEET");
                    //         break;
                    //     case "Fog":
                    //         setWeatherIcon("FOG");
                    //         break;
                    //     case "Smoke":
                    //         setWeatherIcon("FOG");
                    //         break;
                    //     case "Tornado":
                    //         setWeatherIcon("WIND");
                    //         break;
                    //     default:
                    //         setWeatherIcon("CLEAR_DAY");
                    // }
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
                    <div className="forecast-resp">
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
                            <DateTime />
                            <div className="user-location-div">
                                <LocationOnOutlined />
                                <div>{localData?.city},</div>
                                <div>{localData?.country}</div>
                            </div>
                        </div>
                        <Forecast />
                    </div>
                    <div>
                        <Info data={localData}/>
                    </div>
                </div>
            )}
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
