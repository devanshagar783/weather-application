import React from "react";
import CurrentLocation from "./components/CurrentLocation";
import "./App.css";
import Header from "./components/Header";
import { AppContextProvider } from "./context/context";
import BackgroundImage from "./components/BackgroundImage";

function App() {
    return (
        <AppContextProvider>
            <div className="App">
                <Header />
                <div className="main-data">
                    <CurrentLocation />
                </div>
                <BackgroundImage />
            </div>
        </AppContextProvider>
    );
}

export default App;
