/* eslint-disable no-restricted-globals */
import React from 'react';
import './Button.css';

const isOperator = (val) => !isNaN(val) || val === '.' || val === '=';

const Button = (props) => {
  <div className={`button-wrapper ${
    isOperator(props.children) ? null : 'operator'
  }`}
  >
    {props.children}
  </div>;
};

export default Button;
