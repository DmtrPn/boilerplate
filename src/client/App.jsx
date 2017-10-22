import React, { Component } from 'react';
import {Header} from './common/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HomeContainer } from './modules/Home/HomeContainer';
import { AboutContainer } from './modules/About/AboutContainer';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Header/>
                    <Route exact path="/" component={HomeContainer} />
                    <Route exact path="/about" component={AboutContainer} />
                </div>
            </Router>
        );
    }
}

export default App;
