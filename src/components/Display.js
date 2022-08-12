/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

class Display extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { dId, currentValue } = this.props;
    return (
      <div id={dId}>{currentValue}</div>
    );
  }
}

// Display.propTypes = {
//   dId: PropTypes.string,
//   currentValue: PropTypes.string.number,
// };

export default Display;
