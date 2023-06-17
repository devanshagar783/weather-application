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
    const { onLocationChange, location } = appContext;

    // console.log("dev data", location);
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    // onBgChange(data.name);
                    onLocationChange(
                        position.coords.latitude,
                        position.coords.longitude
                    );
                    setLoading(false);
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

    useEffect(() => {
        async function fetchData() {
            console.log("dhefdef pos2",location)
            const data = await fetchCurrLocation({
                latitude: location.lat,
                longitude: location.lon,
            });
            if(data?.cod != 400)
            setLocalData({
                lat: location.lat,
                lon: location.lon,
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
        }
        location?.lat && fetchData();
    }, [location.lat, location.lon]);

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
                    {localData?.country && <div>
                        <Info data={localData} />
                    </div>}
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
