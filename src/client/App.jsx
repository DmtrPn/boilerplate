import React, { Component } from 'react';
import {Header} from './common/Header';
import {About} from './modules/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {HomeContainer} from './modules/Home/HomeContainer';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Header/>
                    <Route exact path="/" component={HomeContainer} />
                    <Route exact path="/about" component={About} />
                </div>
            </Router>
        );
    }
}

export default App;
