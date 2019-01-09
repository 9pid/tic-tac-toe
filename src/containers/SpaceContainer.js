import { connect } from 'react-redux';
import { markSpaceAction } from '../actions/Actions.js';
import SpaceComponent from '../components/SpaceComponent.jsx';

const mapStateToProps = (state, ownProps) => {
  const currentBoard = state.history[state.turnNumber];
  const value = currentBoard.spaces[ownProps.spaceNumber];
  return {value};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(markSpaceAction(ownProps.spaceNumber));
    }
  };
}

const SpaceContainer = connect(mapStateToProps, mapDispatchToProps)(SpaceComponent);
export default SpaceContainer
