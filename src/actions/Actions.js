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
 * @property {?number} spaceNumber マス目
 * @property {?number} turnNumber ターン数
 */

/**
 * 指定のマス目をマークする。
 * @param  {!number} spaceNumber マス目
 * @return {!Action} 指定のマス目をマークのアクション
 */
export function markSpaceAction(spaceNumber) {
  return {
    type: ACTION_TYPE.MARK_SPACE,
    spaceNumber
  };
}

/**
 * 指定のターンへ移動する。
 * @param  {!number} turnNumber ターン数
 * @return {!Action} 指定のターンへ移動のアクション
 */
export function moveToTurnAction(turn) {
  return {
    type: ACTION_TYPE.MOVE_TO_TURN,
    turnNumber
  };
}
