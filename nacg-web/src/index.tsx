import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/containers/App';
import SignUp from './components/users/SignUp';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Header from "./components/common/header/Header";
import LogIn from './components/users/LogIn';
import HomePage from "./components/containers/Home";

const div = document.createElement('div');
document.body.appendChild(div);
document.title = "NACG";


const Routes = () => (
    <main>
        <Switch>
            <Route path="/app" component={App} />
            <Route path="/home" component={HomePage} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn}/>
            <Route path="/activities/:activityId?" component={() => <div>Activity</div>} />
            <Route path="/users/:userName?" component={() => <div>UserNM</div>} />
            <Route path="/signup" component={() => <div>sign up your mother up</div>} />
            <Redirect exact from="*" to="/home" />
        </Switch>
    </main>
);

export const MyApp =() => {
    return (
        <Router>
            <div>
                <Header />
                <Routes />
            </div>
        </Router>
    )
};

ReactDOM.render(<MyApp />, div);

