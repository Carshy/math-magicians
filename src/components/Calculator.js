/* eslint-disable jsx-quotes */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './Calculator.css';
import Button from './Button';

class Calculator extends Component {
  render() {
    return (
      <div className='app'>
        <div className='calc-wrapper'>
          <div className='row'>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>/</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
