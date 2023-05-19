import axios from "axios";
import apiKeys from "../apiKeys.js";

export function fetchLocation(location = "") {
    axios
        .get(
            `${apiKeys.base}weather?q=${location}&units=metric&APPID=${apiKeys.key}`
        )
        .then((res) => {
            console.log("devansh res", res);
            return res?.data.json();
        })
        .catch(function (err) {
            console.log("devansh err", err);
            return {"error":err}
        });
}
