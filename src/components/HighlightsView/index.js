import React from "react";
import "./index.css";

const HighlightsView = ({ data }) => {
    return (
        <div className="highlight-item">
            {data?.title}
            <div className="highlight-subtext">
                <img src={data?.icon} />
                {data?.items?.length > 0 ? (
                    <div className="highlight-list">
                        {data?.items?.map((item, index) => (
                            <div key={index} className="highlight-items">
                                <p>{item.title}</p>
                                <p>{item.value}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="highlight-value">
                        <p>{data?.value}</p>
                        <p>{data?.unit}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HighlightsView;
