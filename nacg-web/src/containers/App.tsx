import React, {useState} from 'react';
import './App.css';
import {getHelloWorld} from "../services/HelloWorldServices";

const App = () => {
    const [str, setStr] = useState<string>("");
    const [showSL, setShowSL] = useState(false);
    const getHelloWorldService = () => {
        getHelloWorld().then(s => setStr(s));
    }
    const clickB = () => {
        getHelloWorldService();
        setShowSL(true);
    }
    const hideB = () => {
        setShowSL(false);
    }
        return (
        <div className="App">
            <button onClick={clickB}>Show Slogan</button>
            <button onClick={hideB}>Hide Slogan</button>
            {showSL ? str : ""}
        </div>
        );
};

export default App;
