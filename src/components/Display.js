/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';

class Display extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      dId, total, next, operation,
    } = this.props;
    return (
      <div id={dId}>
        {total}
        {next}
        {operation}
      </div>
    );
  }
}

export default Display;
