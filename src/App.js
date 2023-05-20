import React from "react";
import CurrentLocation from "./components/CurrentLocation";
import "./App.css";
import Header from "./components/Header";
import { BgContextProvider } from "./context/context";
import BackgroundImage from "./components/BackgroundImage";

function App() {
    return (
        <BgContextProvider>
            <div className="App">
                <Header />
                <div className="main-data">
                    <CurrentLocation />
                </div>
                <BackgroundImage />
            </div>
        </BgContextProvider>
    );
}

export default App;
