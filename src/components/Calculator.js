/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-quotes */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: '0',
    };
  }

  render() {
    const { currentValue } = this.state;
    return (
      <div className='calculator-wrapper'>
        <Display dId='display-view' currentValue={currentValue} />
        <Button btnId='clear' btnName='AC' />
        <Button btnId='del' btnName='+/-' />
        <Button btnId='del' btnName='%' />
        <Button btnId='div' btnName='/' />
        <Button btnId='seven' btnName='7' />
        <Button btnId='eight' btnName='8' />
        <Button btnId='nine' btnName='9' />
        <Button btnId='mul' btnName='x' />
        <Button btnId='four' btnName='4' />
        <Button btnId='five' btnName='5' />
        <Button btnId='six' btnName='6' />
        <Button btnId='min' btnName='-' />
        <Button btnId='one' btnName='1' />
        <Button btnId='two' btnName='2' />
        <Button btnId='three' btnName='3' />
        <Button btnId='plus' btnName='+' />
        <Button btnId='zero' btnName='0' />
        <Button btnId='period' btnName='.' />
        <Button btnId='equal' btnName='=' />
      </div>
    );
  }
}

export default Calculator;
