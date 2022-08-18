/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import '../styles/Display.css';

class Display extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      dId, total, operation, next,
    } = this.props;
    return (
      <div id={dId}>
        {total}
        {operation}
        {next}
      </div>
    );
  }
}

export default Display;
