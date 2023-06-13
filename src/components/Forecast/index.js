import React, { useContext, useEffect, useState } from "react";
import ForecastItem from "../ForecastItem";
import { AppContext } from "../../context/context";
import { fetchForecast } from "../../utils";
import "./index.css"

const Forecast = () => {
    const appContext = useContext(AppContext);
    const { location, onForecastItemsChange, forecastItems } = appContext;

    useEffect(() => {
        async function fetchData(){
            const data = await fetchForecast(location.lat, location.lon);
            onForecastItemsChange(data?.list);
        }
        fetchData();
    }, [location.lat, location.lon]);
    return (
        <div>
            <p className="forecast-text">5 Days Forecast</p>
            <div className="home-container forecast-padding">
                {forecastItems && forecastItems.map((item, index) => {
                    if(index % 8 === 0)
                        return <ForecastItem item={item} key={index} />;
                    return "";
                })}
            </div>
        </div>
    );
};

export default Forecast;
