import React from 'react';
import BoardComponent from './BoardComponent.jsx';
import MoveButtonComponent from './MoveButtonComponent.jsx';
import {calculateWinner} from '../utils/ScoreUtil.js';

export default class GameComponent extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <BoardComponent />
        </div>
        <div className="game-info">
          {this.renderStatus()}
          {this.renderMoveButtons()}
        </div>
      </div>
    );
  }

  renderStatus() {
    const message = ((winner) => {
      if (winner) return 'Winner: ' + winner;

      return 'Next Player: ' + this.props.player;
    })(this.props.winner);

    return (
      <div>
        {message}
      </div>
    );
  }

  renderMoveButtons() {
    const moveButtonElements = Array(this.props.totalTurnNumber).fill(null).map((_, turnNumber) => {
      return this.renderMoveButton(turnNumber);
    });

    return (
      <ol>
        {moveButtonElements}
      </ol>
    );
  }

  renderMoveButton(turnNumber) {
    return (
      <MoveButtonComponent key={turnNumber}
                           turnNumber={turnNumber}
                           onClick={this.props.onClick} />
    );
  }
}
