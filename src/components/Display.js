/* eslint-disable react/prop-types, react/prefer-stateless-function */
import React, { Component } from 'react';

class Display extends Component {
  render() {
    const { dId, currentValue } = this.props;
    return (
      <div id={dId}>{currentValue}</div>
    );
  }
}

export default Display;
