import React from "react";
import "./index.css";
import HighlightsView from "../HighlightsView";
import HumidityIcon from "../../assets/humidity.svg";
import feelsLikeIcon from "../../assets/feelsLike.svg";
import pressureIcon from "../../assets/pressure.svg";
import visibilityIcon from "../../assets/visibility.svg";

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

    return (
        <div className="home-container info-container">
            <p className="forecast-text">Todays Highlights</p>
            <div></div>
            <div className="forecast-2row">
                <HighlightsView data={humidityData} />
                <HighlightsView data={pressureData} />
                <HighlightsView data={visibilityData} />
                <HighlightsView data={feelsLikeData} />
            </div>
        </div>
    );
};

export default Info;
