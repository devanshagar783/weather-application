import React, { useEffect } from "react";
import "./index.css";
import HighlightsView from "../HighlightsView";
import HumidityIcon from "../../assets/humidity.svg";
import feelsLikeIcon from "../../assets/feelsLike.svg";
import pressureIcon from "../../assets/pressure.svg";
import visibilityIcon from "../../assets/visibility.svg";
import aqiIcon from "../../assets/aqiIcon.svg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import { fetchAirPollution } from "../../utils";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import ForecastData from "../ForecastData";

const Info = ({ data }) => {
    const {
        // city,
        sunrise,
        sunset,
        lat,
        lon,
        humidity,
        feelsLike,
        pressure,
        visibility,
        // clouds,
    } = data;

    const [aqi, setAqi] = useState({});
    const appContext = useContext(AppContext);
    const { forecastItems } = appContext;

    const humidityData = {
        title: "Humidity",
        icon: HumidityIcon,
        value: humidity,
        unit: "%",
    };
    const feelsLikeData = {
        title: "Feels Like",
        icon: feelsLikeIcon,
        value: feelsLike,
        unit: "°C",
    };
    const pressureData = {
        title: "Pressure",
        icon: pressureIcon,
        value: pressure,
        unit: "hPa",
    };
    const visibilityData = {
        title: "Visibility",
        icon: visibilityIcon,
        value: visibility / 1000,
        unit: "km",
    };

    const aqiData = {
        title: "Air Quality Index",
        icon: aqiIcon,
        aqi: aqi?.main?.aqi,
        items: [
            {
                title: "PM2.5",
                value: aqi?.components?.pm2_5,
            },
            {
                title: "SO2",
                value: aqi?.components?.so2,
            },
            {
                title: "NO2",
                value: aqi?.components?.no2,
            },
            {
                title: "O3",
                value: aqi?.components?.o3,
            },
        ],
    };
    const sunData = {
        title: "Sunrise & Sunset",
        items: [
            {
                title: "Sunrise",
                value: new Date(sunrise * 1000).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
                icon: sun,
            },
            {
                title: "Sunset",
                value: new Date(sunset * 1000).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
                icon: moon,
            },
        ],
    };

    useEffect(() => {
        async function fetchAqi() {
            const aqiFetchData = await fetchAirPollution(lat, lon);
            if (aqiFetchData?.cod != 400) setAqi(aqiFetchData?.list[0]);
        }
        fetchAqi();
    }, [lat, lon]);

    return (
        <div>
            <div className="home-container info-container">
                <p className="forecast-text">Todays Highlights</p>
                <div className="forecast-row">
                    <HighlightsView data={aqiData} />
                    <HighlightsView data={sunData} />
                </div>
                <div className="forecast-row">
                    <div className="forecast-grow">
                        <HighlightsView data={humidityData} />
                        <HighlightsView data={pressureData} />
                    </div>
                    <div className="forecast-grow">
                        <HighlightsView data={visibilityData} />
                        <HighlightsView data={feelsLikeData} />
                    </div>
                </div>
            </div>
            <br />
            <div>
                <p className="forecast-text">Today at</p>
                <div className="home-container info-container forecast-container">
                    {forecastItems &&
                        forecastItems.map((item, index) => {
                            if (index < 8)
                                return <ForecastData data={item} key={index} />;
                            return "";
                        })}
                </div>
            </div>
        </div>
    );
};

export default Info;
