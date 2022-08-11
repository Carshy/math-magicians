import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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

Display.propTypes = {
  dId: PropTypes.string.isRequired,
  currentValue: PropTypes.string.number.isRequired,
};

export default Display;
