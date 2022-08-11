import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
Button.propTypes = {
  btnId: PropTypes.string.isRequired,
  btnName: PropTypes.string.number.isRequired,
};
export default Button;
