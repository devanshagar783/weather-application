import axios from "axios";
import apiKeys from "../apiKeys.js";

export const fetchLocation = async (location = "") => {
    const apiCall = await fetch(
        `${apiKeys.base}weather?q=${location}&units=metric&APPID=${apiKeys.key}`
    );
    const data = await apiCall.json();
    return data;
};
