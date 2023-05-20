import React, { useEffect, useState } from "react";
import CurrentLocation from "./components/CurrentLocation";
import "./App.css";
import Header from "./components/Header";
import { fetchRandomPic } from "./utils";

function App() {
    const [bgImage, setBgImage] = useState(
        "https://images.unsplash.com/photo-1504714146340-959ca07e1f38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
    );

    const getBg = async () => {
        const bg = await fetchRandomPic();
        console.log("img data", bg);
        // setBgImage(bg.urls.full)
    };

    useEffect(() => {}, []);

    return (
        <div className="App">
            <Header />
            <div className="main-data">
                <CurrentLocation />
            </div>
            <img className="backimg" src={bgImage} alt="" />
        </div>
    );
}

export default App;
