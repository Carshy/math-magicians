import React, { Component } from 'react';
// import Calculator from './components/Calculator';
import './App.css';
import Navigation from './components/Navigation';
import Mathematics from './pages/Mathematics';

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
          <Mathematics />
        </div>
      </div>
    );
  }
}

export default App;
