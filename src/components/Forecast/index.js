import React, { useContext, useEffect, useState } from "react";
import ForecastItem from "../ForecastItem";
import { AppContext } from "../../context/context";
import { fetchForecast } from "../../utils";

const Forecast = () => {
    const [forecastItems, setForecastItems] = useState([]);
    const appContext = useContext(AppContext);
    const { location } = appContext;

    useEffect(() => {
        async function fetchData(){

            const data = await fetchForecast(location.lat, location.lon);
            // console.log("devansh res", data);
            setForecastItems(data?.list)
        }
        fetchData();
    }, [location.lat, location.lon]);
    return (
        <div>
            5 Days Forecast
            <div className="home-container">
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
