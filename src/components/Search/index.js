import React, { useRef, useState } from "react";
import axios from "axios";
import apiKeys from "../../apiKeys.js";
import "./index.css"
import { SearchOutlined } from "@mui/icons-material";

const Search = () => {
    const query = useRef("");
    const [weather, setWeather] = useState({});

    function onSearch() {
        axios
            .get(
                `${apiKeys.base}weather?q=${query.current}&units=metric&APPID=${apiKeys.key}`
            )
            .then((res) => {
                setWeather(res.data);
            })
            .catch(function (err) {
                console.log(err);
                setWeather({});
            });
    }

    return (
        <div className="search-container">
            Search bar
            <div>
                <input
                    ref={query}
                    type="text"
                    className="search-input"
                    placeholder="Search city"
                />
                <SearchOutlined />
            </div>
        </div>
    );
};

export default Search;
