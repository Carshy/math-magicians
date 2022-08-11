/* eslint-disable react/prop-types */
/* eslint-disable jsx-quotes */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { btnId, btnName } = this.props;
    return (
      <button className='btn' type='button' id={btnId}>{btnName}</button>
    );
  }
}

export default Button;
