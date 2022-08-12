/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { btnId, btnName, handleClick } = this.props;
    return (
      <button className="btn" type="button" id={btnId} onClick={() => handleClick(btnName)}>
        {btnName}
      </button>
    );
  }
}

export default Button;
