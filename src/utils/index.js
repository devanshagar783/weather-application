import apiKeys from "../apiKeys.js";

export const fetchCurrLocation = async ({latitude, longitude}) => {
    const apiCall = await fetch(
        `${apiKeys.weather_base}weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${apiKeys.weather_key}`
    );
    const data = await apiCall.json();
    return data;
}

export const fetchLocation = async (location = "") => {
    const apiCall = await fetch(
        `${apiKeys.weather_base}weather?q=${location}&units=metric&APPID=${apiKeys.weather_key}`
    );
    const data = await apiCall.json();
    return data;
};

export const fetchForecast = async (lat, lon) => {
    const apiCall = await fetch(
        `${apiKeys.weather_base}forecast?lat=${lat}&lon=${lon}&APPID=${apiKeys.weather_key}`
    );
    const data = await apiCall.json();
    return data;
};

export const fetchRandomPic = async () => {
    const apiCall = await fetch(
        `${apiKeys.unsplash_base}/photos/random?client_id=${apiKeys.unsplash_access}`
    );
    const data = await apiCall.json();
    return data;
}