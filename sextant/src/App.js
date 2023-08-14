import React, { Component } from 'react';
import './App.css';
import Banner from './banner';
import Exhibit from './exhibit';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Welcome to Sextant App" />
                <Exhibit name="exhibit 1 "></Exhibit>
                <Exhibit name="exhibit 2"></Exhibit>
                <Exhibit name="exhibit 3"></Exhibit>
            </div>
        );
    }
}

export default App;