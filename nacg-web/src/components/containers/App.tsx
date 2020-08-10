import React, {useState} from 'react';
import './App.css';
import {getHelloWorld} from "../../services/HelloWorldServices";
import {Row, Container, Col} from "react-bootstrap";

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
        <Container>
            <Row>
                <Col>
                    <button onClick={clickB}>Show Slogan</button>
                </Col>
                <Col>
                    <button onClick={hideB}>Hide Slogan</button>
                </Col>
            </Row>
            <Row>
                {showSL ? str : ""}
            </Row>
        </Container>
        );
};

export default App;
