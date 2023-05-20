import React, { useContext } from "react";
import { BgContext } from "../../context/context";
import './index.css'

const BackgroundImage = () => {
    const bgCtx = useContext(BgContext);
    const { bgImage } = bgCtx;
    return (
        <div className="bg-container">
            <img className="backimg" src={bgImage} alt="" />
        </div>
    );
};

export default BackgroundImage;
