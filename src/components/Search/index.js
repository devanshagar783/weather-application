import React, { useRef, useState } from "react";
import "./index.css";
import { SearchOutlined } from "@mui/icons-material";
import { fetchLocation } from "../../utils";
// import { AppContext } from "../../context/context";

const Search = () => {
    const query = useRef("");
    // const [weather, setWeather] = useState({});
    // const AppCtx = useContext(AppContext);
    // const { onBgChange } = AppCtx;

    const onSearch = async () => {
        const search = await fetchLocation(query.current.value);
        // setWeather(search);
        // onBgChange(query.current.value);
    }

    return (
        <div className="search-container">
            {/* Search bar */}
            <div className="search-box">
                <input
                    ref={query}
                    type="text"
                    className="search-input"
                    placeholder="Search city"
                />
                <SearchOutlined
                    onClick={() => {
                        onSearch();
                    }}
                />
            </div>
        </div>
    );
};

export default Search;
