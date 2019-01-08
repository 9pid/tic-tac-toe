/**
 * アクションの種類: 指定のマス目をマーク
 * @const {string}
 */
export const MARK_SPACE = 'MARK_SPACE';

/**
 * アクションの種類: 指定のターンへ移動
 * @const {string}
 */
export const MOVE_TO_TURN = 'MOVE_TO_TURN';

/**
 *
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
    type: MARK_SPACE,
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
    type: MOVE_TO_TURN,
    turn
  };
}
