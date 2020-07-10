import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

const div = document.createElement('div');
document.body.appendChild(div);
document.title = "NACG";


const Routes = () => (
    <main>
        <Switch>
            <Route path="/app" component={App} />
            <Route path="/home" component={() => <div>Home</div>} />
            <Route path="/activities/:activityId?" component={() => <div>Activity</div>} />
            <Redirect exact from="*" to="/home" />
        </Switch>
    </main>
);

export const MyApp =() => {
    return (
        <Router>
            <div>
                <Routes />
            </div>
        </Router>
    )
};

ReactDOM.render(<MyApp />, div);

