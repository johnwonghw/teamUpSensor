import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import {  } from "react-router-dom";

import Home from './containers/home'
import CarPage from './containers/car'
import PersonPage from './containers/person'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/car" component={CarPage} />
          <Route exact path="/person" component={PersonPage} />
        </div>
      </Router>
    );
  }
}

export default App;
