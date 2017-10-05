import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Home from './Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>

                <div className="app">
                    <Header/>
                    <Route exact path="/" component={About} />
                    <Route exact path="/about" component={Home} />
                </div>
            </Router>
        );
    }
}

export default App;
