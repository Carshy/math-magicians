import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (value) => {
    this.setState((prevState) => calculate(prevState, value));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator-wrapper">
        <Display dId="display-view" total={total} next={next} operation={operation} />
        <Button btnId="clear" btnName="AC" handleClick={this.handleClick} />
        <Button btnId="del" btnName="+/-" handleClick={this.handleClick} />
        <Button btnId="del" btnName="%" handleClick={this.handleClick} />
        <Button btnId="div" btnName="/" handleClick={this.handleClick} />
        <Button btnId="seven" btnName="7" handleClick={this.handleClick} />
        <Button btnId="eight" btnName="8" handleClick={this.handleClick} />
        <Button btnId="nine" btnName="9" handleClick={this.handleClick} />
        <Button btnId="mul" btnName="x" handleClick={this.handleClick} />
        <Button btnId="four" btnName="4" handleClick={this.handleClick} />
        <Button btnId="five" btnName="5" handleClick={this.handleClick} />
        <Button btnId="six" btnName="6" handleClick={this.handleClick} />
        <Button btnId="min" btnName="-" handleClick={this.handleClick} />
        <Button btnId="one" btnName="1" handleClick={this.handleClick} />
        <Button btnId="two" btnName="2" handleClick={this.handleClick} />
        <Button btnId="three" btnName="3" handleClick={this.handleClick} />
        <Button btnId="plus" btnName="+" handleClick={this.handleClick} />
        <Button btnId="zero" btnName="0" handleClick={this.handleClick} />
        <Button btnId="period" btnName="." handleClick={this.handleClick} />
        <Button btnId="equal" btnName="=" handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;
