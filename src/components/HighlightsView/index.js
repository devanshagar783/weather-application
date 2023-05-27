import React from "react";
import "./index.css";

const HighlightsView = ({ data }) => {
    return (
        <div className="highlight-item">
            {data.title}
            <div className="highlight-subtext">
                <img src={data.icon} />
                <div className="highlight-value">
                    <p>{data.value}</p>
                    <p>{data.unit}</p>
                </div>
            </div>
        </div>
    );
};

export default HighlightsView;
