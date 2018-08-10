import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavigationBar from './components/NavigationBar/NavigationBar';
import RouterContainer from './router-navigation/RouterContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <RouterContainer />
        </div>
      </Router>
    );
  }
}

export default App;
