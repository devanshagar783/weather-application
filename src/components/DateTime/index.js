import { AccessTimeOutlined, CalendarTodayOutlined } from "@mui/icons-material";
import React, { useRef } from "react";
import Clock from "react-live-clock";
import "./index.css"

const DateTime = () => {
    const date = useRef(new Date());

    const dateBuilder = (d) => {
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
        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day}, ${date} ${month} ${year}`;
    };

    return (
        <>
            <div className="datetime-div">
                <AccessTimeOutlined />
                <Clock format="HH:mm:ss" interval={1000} ticking />
            </div>
            <div className="datetime-div">
                <CalendarTodayOutlined />
                <div>{dateBuilder(date.current)}</div>
            </div>
        </>
    );
};

export default DateTime;
