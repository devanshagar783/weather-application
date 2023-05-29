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

const Info = ({ data }) => {
    const {
        city,
        sunrise,
        sunset,
        lat,
        lon,
        humidity,
        feelsLike,
        pressure,
        visibility,
        clouds,
    } = data;

    const [aqi, setAqi] = useState({});
    console.log("dev data", data);

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
                value: sunrise,
                icon: sun,
            },
            {
                title: "Sunset",
                value: sunset,
                icon: moon,
            },
        ],
    };

    useEffect(() => {
        async function fetchAqi() {
            const aqiFetchData = await fetchAirPollution(lat, lon);
            setAqi(aqiFetchData?.list[0]);
            console.log("aqui fetch", aqiFetchData.list[0]);
        }
        fetchAqi();
    }, []);

    return (
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
    );
};

export default Info;
