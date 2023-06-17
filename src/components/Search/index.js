import React, { useRef, useContext } from "react";
import "./index.css";
import { SearchOutlined } from "@mui/icons-material";
import { fetchLocation } from "../../utils";
import { AppContext } from "../../context/context";

const Search = () => {
    const query = useRef("");
    const AppCtx = useContext(AppContext);
    const { onLocationChange } = AppCtx;

    const onSearch = async () => {
        const search = await fetchLocation(query.current.value);
        onLocationChange(search?.coord.lat, search?.coord?.lon)
    }

    return (
        <div className="search-container">
            <div className="search-box">
                <input
                    ref={query}
                    type="text"
                    className="search-input"
                    placeholder="Search city"
                />
                <SearchOutlined className="search-btn"
                    onClick={() => {
                        onSearch();
                    }}
                />
            </div>
        </div>
    );
};

export default Search;
