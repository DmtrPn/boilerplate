import React from 'react';
import About from './About';
import Home from './Home';
import Header from './Header';

import { BrowserRouter as Router, Route } from 'react-router-dom';
// DONT USE
const Routes = () => {
    return (
        <Router>

            <div className="app">
                {/*<Header/>*/}
                <Route exact path="/" component={About} />
                <Route exact path="/about" component={Home} />
            </div>
        </Router>
    );
};

export default Routes;
