/**
 * アクションの種類
 * @type {object}
 * @property {string} MARK_SPACE 指定のマス目をマーク
 * @property {string} MOVE_TO_TURN 指定のターンへ移動
 */
export const ACTION_TYPE = {
  MARK_SPACE: 'MARK_SPACE',
  MOVE_TO_TURN: 'MOVE_TO_TURN'
}

/**
 * アクションオブジェクト。
 * @typedef {object} Action
 * @property {!string} type アクションの種類
 * @property {?number} space マス目
 * @property {?number} turn ターン数
 */

/**
 * 指定のマス目をマークする。
 * @param  {!number} space マス目
 * @return {!Action} 指定のマス目をマークのアクション
 */
export function markSpaceAction(space) {
  return {
    type: ACTION_TYPE.MARK_SPACE,
    space
  };
}

/**
 * 指定のターンへ移動する。
 * @param  {!number} turn ターン数
 * @return {!Action} 指定のターンへ移動のアクション
 */
export function moveToTurnAction(turn) {
  return {
    type: ACTION_TYPE.MOVE_TO_TURN,
    turn
  };
}
