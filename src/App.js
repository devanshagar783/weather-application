import React from "react";
import CurrentLocation from "./components/CurrentLocation";
import "./App.css";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <div className="main-data">
                <Header />
                <div className="content">
                    <CurrentLocation />
                </div>
            </div>
            <img
                className="backimg"
                src="https://images.unsplash.com/photo-1601752874509-0e350467dc7b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NTEwMjJ8MHwxfHNlYXJjaHwxfHxsdWNrbm93fGVufDB8fHx8MTY4NDU4NTkxOXww&ixlib=rb-4.0.3&q=85"
                alt=""
            />
        </div>
    );
}

export default App;
