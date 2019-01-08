import { ACTION_TYPE } from '../actions/Actions.js'
import { GAME_CONST } from '../consts/GameConst.js'

/**
 * initial state
 * @type {objecdt}
 * @property {object[]} history 盤面のヒストリー
 * @property {string} player プレイヤー
 */
const initialState = {
  history: [{
    squares: Array(9).fill(null)
  }],
  turnNumber: 0,
  player: GAME_CONST.PLAYER.X
}

/**
 * Game Reducer
 * @param {object} [state=initialState] state. 初回はundefinedで渡ってくるので初期化する。
 * @param {string} action アクションの種類
 * @return {object} state
 */
const GameReducer = (state=initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.MARK_SPACE:
      return ((state, action) => {
        const newBoard = createNewBoard(action.spaceNumber, state.player, state.history.slice(-1)[0]);
        const newHistory = state.history.concat([newBoard]);
        const newTurnNumber = state.turnNumber + 1;
        const newPlayer = state.player === GAME_CONST.PLAYER.X?
          GAME_CONST.PLAYER.O:
          GAME_CONST.PLAYER.X;

        return {
          history: newHistory,
          turnNumber: newTurnNumber,
          player: newPlayer
        };
      })(state, action);

    case ACTION_TYPE.MOVE_TO_TURN:
      return ((state, action) => {
        const newTurnNumber = action.turnNumber;
        const newPlayer = action.turnNumber % 2 === 0?
          GAME_CONST.PLAYER.X:
          GAME_CONST.PLAYER.O;

        return {
          history: state.history.concat(),
          turnNumber: newTurnNumber,
          player: newPlayer
        };
      })(state, action);

    default:
      return state;
  }
}

/**
 * 新しい盤面を作成。
 * @param  {number} spaceNumber マス目
 * @param  {string} player プレイヤー
 * @param  {number[]} board 盤面
 * @return {number[]} 新しい盤面
 */
function createNewBoard(spaceNumber, player, board) {
  const newSquare = board.squares.concat();
  newSquare[spaceNumber] = player;
  return {
    squares: newSquare
  };
}

export default GameReducer;
