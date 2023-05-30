import React from "react";
import "./index.css";

const HighlightsView = ({ data }) => {
    return (
        <div className="highlight-item">
            <div className="highlight-title-container">
                {data?.title}
                {data?.aqui && <div className="aqui-type">Good</div>}
            </div>
            <div className="highlight-subtext">
                <img src={data?.icon} />
                {data?.items?.length > 0 ? (
                    <div className={`highlight-list ${data?.icon ? "": "highlight-noicon"}`}>
                        {data?.items?.map((item, index) => (
                            <div key={index} className="highlight-items">
                                {item?.icon && <img className="highlight-item-img" src={item?.icon} />}
                                <div className="highlight-subitems">
                                    <p className="multi-item-title">
                                        {item.title}
                                    </p>
                                    <p className="multi-item-value">
                                        {item.value}
                                    </p>
                                </div>
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
