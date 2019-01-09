import { connect } from 'react-redux';
import { moveToTurnAction } from '../actions/Actions.js';
import { calculateWinner } from '../utils/ScoreUtil.js';
import GameComponent from '../components/GameComponent.jsx';

const mapStateToProps = (state, ownProps) => {
  const winner = calculateWinner(state.history[state.turnNumber].spaces);
  return {
    totalTurnNumber: state.history.length,
    winner,
    player: state.player
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (turnNumber) => {
      dispatch(moveToTurnAction(turnNumber));
    }
  };
}

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(GameComponent);
export default GameContainer
