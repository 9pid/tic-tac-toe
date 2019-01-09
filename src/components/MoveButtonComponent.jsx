import React from 'react';

export default class MoveButtonComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const message = this.props.turnNumber? ('Go to move #' + step): 'Go to game start';
    return (
      <li>
        <button onClick={() => this.props.onClick(this.props.turnNumber)}>
          {message}
        </button>
      </li>
    );
  }
}
