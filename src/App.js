import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Mathematics from './pages/Mathematics';
import Home from './pages/Home';
import Quote from './pages/Quote';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Mathematics />} path="/calculator" />
          <Route element={<Quote />} path="/quote" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
