import React from "react";
import "./index.css";

const ForecastItem = ({ item }) => {
    // console.log("item",item)
    const {
        dt,
        main: { temp_max, temp_min },
        weather,
    } = item;
    const icon = weather[0].icon;

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    // console.log("dd", new Date(dt*1000))
    const date = new Date(dt * 1000);

    return (
        <div className="forecast-item">
            <img
                className="forecast-item-image"
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                alt=""
            />
            <div className="forecast-minmax">
                <div className="forecast-max-temp">{`+${temp_max}°`}</div>
                <p className="slash">{"/"}</p>
                <div className="forecast-min-temp">{`+${temp_min}`}</div>
            </div>
            <div className={"forecast-date"}>
                <p>{`${date.getDate()}`}</p>
                <p>{`${months[date.getMonth()]}`}</p>
            </div>
            <p className="forecast-day">{days[date.getDay()]}</p>
        </div>
    );
};

export default ForecastItem;
