import React from 'react';
import { GAME_CONST } from '../consts/GameConst.js';
import SpaceContainer from '../containers/SpaceContainer.js';

export default class BoardComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSpace(GAME_CONST.SPACE.ONE)}
          {this.renderSpace(GAME_CONST.SPACE.TWO)}
          {this.renderSpace(GAME_CONST.SPACE.THREE)}
        </div>
        <div className="board-row">
          {this.renderSpace(GAME_CONST.SPACE.FOUR)}
          {this.renderSpace(GAME_CONST.SPACE.FIVE)}
          {this.renderSpace(GAME_CONST.SPACE.SIX)}
        </div>
        <div className="board-row">
          {this.renderSpace(GAME_CONST.SPACE.SEVEN)}
          {this.renderSpace(GAME_CONST.SPACE.EIGHT)}
          {this.renderSpace(GAME_CONST.SPACE.NINE)}
        </div>
      </div>
    );
  }

  renderSpace(spaceNumber) {
    return <SpaceContainer spaceNumber={spaceNumber} />;
  }
}
