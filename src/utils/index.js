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
        `${apiKeys.weather_base}forecast?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKeys.weather_key}`
    );
    const data = await apiCall.json();
    return data;
};

export const fetchAirPollution = async (lat, lon) => {
    const apiCall = await fetch(
        `${apiKeys.weather_base}air_pollution?lat=${lat}&lon=${lon}&appid=${apiKeys.weather_key}`
    );
    const data = await apiCall.json();
    return data;
}

export const fetchRandomPic = async () => {
    const apiCall = await fetch(
        `${apiKeys.unsplash_base}photos/random?client_id=${apiKeys.unsplash_access}`
    );
    const data = await apiCall.json();
    return data;
}

export const fetchLocationPic = async (location) => {
    const apiCall = await fetch(
        `${apiKeys.unsplash_base}search/photos?query=${location}&client_id=${apiKeys.unsplash_access}&orientation=landscape`
    );
    const data = await apiCall.json();
    return data;
}