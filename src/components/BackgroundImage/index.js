import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import './index.css'

const BackgroundImage = () => {
    const AppCtx = useContext(AppContext);
    const { bgImage } = AppCtx;
    return (
        <div className="bg-container">
            <img className="backimg" src={bgImage} alt="" />
        </div>
    );
};

export default BackgroundImage;
