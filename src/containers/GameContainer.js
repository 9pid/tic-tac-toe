import { connect } from 'react-redux';
import { moveToTurnAction } from '../actions/Actions.js';
import GameComponent from '../components/GameComponent.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    totalTurnNumber: state.history.length
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
