import React from "react";

const ForecastItem = ({item}) => {

    const { dt, main: { temp, temp_max, temp_min}, weather } = item

    return <div>
        {/* //image
        max/min temp
        date
        day */}
    </div>;
};

export default ForecastItem;
