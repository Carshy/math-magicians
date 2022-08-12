import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (value) => {
    const output = calculate({ total, next, operation }, value);
    setTotal(output.total);
    setNext(output.next);
    setOperation(output.operation);
  };

  return (
    <div className="calculator-wrapper">
      <Display dId="display-view" total={total} next={next} operation={operation} />
      <Button btnId="clear" btnName="AC" handleClick={handleClick} />
      <Button btnId="del" btnName="+/-" handleClick={handleClick} />
      <Button btnId="del" btnName="%" handleClick={handleClick} />
      <Button btnId="div" btnName="/" handleClick={handleClick} />
      <Button btnId="seven" btnName="7" handleClick={handleClick} />
      <Button btnId="eight" btnName="8" handleClick={handleClick} />
      <Button btnId="nine" btnName="9" handleClick={handleClick} />
      <Button btnId="mul" btnName="x" handleClick={handleClick} />
      <Button btnId="four" btnName="4" handleClick={handleClick} />
      <Button btnId="five" btnName="5" handleClick={handleClick} />
      <Button btnId="six" btnName="6" handleClick={handleClick} />
      <Button btnId="min" btnName="-" handleClick={handleClick} />
      <Button btnId="one" btnName="1" handleClick={handleClick} />
      <Button btnId="two" btnName="2" handleClick={handleClick} />
      <Button btnId="three" btnName="3" handleClick={handleClick} />
      <Button btnId="plus" btnName="+" handleClick={handleClick} />
      <Button btnId="zero" btnName="0" handleClick={handleClick} />
      <Button btnId="period" btnName="." handleClick={handleClick} />
      <Button btnId="equal" btnName="=" handleClick={handleClick} />
    </div>
  );
};

export default Calculator;
