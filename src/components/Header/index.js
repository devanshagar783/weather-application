import React from "react";
import "./index.css";
import Search from "../Search";

const Header = () => {
    return (
        <div className="header">
            <div className="header-icon">Weather App</div>
            <div className="header-search">
                <Search />
            </div>
        </div>
    );
};

export default Header;
