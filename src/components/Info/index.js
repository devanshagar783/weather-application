import React from "react";
import "./index.css";
import HighlightsView from "../HighlightsView";

const Info = ({data}) => {

  const { city, sunrise, sunset, lat, lon, humidity, feelsLike, pressure, visibility, clouds } = data;
  console.log("dev data", data)

  const ab={
    "title": "humidity",
    "icon": "",
    "value": humidity,
  }

    return (
        <div className="home-container">
            <p className="forecast-text">Todays Highlights</p>
            <HighlightsView data={ab} />
        </div>
    );
};

export default Info;
