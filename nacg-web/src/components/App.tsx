import React from 'react';
import './App.css';

export default class App extends React.Component {
    state = {
        str: ""
    }

    componentDidMount () {
        fetch('http://localhost:8080/hello/world')
            .then(response => response.text())
            .then(res =>{
                this.setState({str: res});
            });
    }

    render() {
        return (
        <div className="App">
            <header className="App-header">
                <a className="App-link">
                    {this.state.str}
                </a>
            </header>
        </div>
        );
    }
};
