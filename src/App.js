import React, { Component } from 'react';
import Calculator from './components/Calculator';
import './App.css';
import Navigation from './components/Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="App">
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
