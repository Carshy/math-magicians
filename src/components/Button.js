/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { btnId, btnName } = this.props;
    return (
      <button className="btn" type="button" id={btnId}>{btnName}</button>
    );
  }
}

export default Button;
