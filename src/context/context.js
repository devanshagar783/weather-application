import { createContext, useState } from "react";
import { fetchLocationPic } from "../utils";

export const AppContext = createContext({
    bgImage: '',
    onBgChange: (location) => {},
    location: { lat: 0, lon: 0},
    onLocationChange: (lat, lon) => {},
    forecastItems: [],
    onForecastItemsChange: (data) => {},
})

export const AppContextProvider = ({children}) => {
    const [bgImage, setBgImage] = useState('https://images.unsplash.com/photo-1504714146340-959ca07e1f38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80')
    const [location, setLocation] = useState({})
    const [forecast, setForecast] = useState([])

    const handleBgChange = async (location) => {
        let data = await fetchLocationPic(location)
        setBgImage(data?.results[Math.floor(Math.random() * data?.results?.length)]?.urls?.full);
    }

    const handleLocationChange = (lat, lon) => {
        setLocation({lat: lat, lon: lon});
    }

    const handleForecastChange = (data) => {
        setForecast(data);
    }

    const contextValue = {
        bgImage,
        onBgChange: handleBgChange,
        location,
        onLocationChange: handleLocationChange,
        forecastItems: forecast,
        onForecastItemsChange: handleForecastChange,
    }

    return <AppContext.Provider value={contextValue}>
        {children}
    </AppContext.Provider>
}