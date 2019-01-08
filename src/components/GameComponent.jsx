import React from 'react';
import BoardComponent from './BoardComponent.jsx';
import {calculateWinner} from '../utils/ScoreUtil.js';

export default class GameComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      // 現在のステップ数
      stepNumber: 0,
      // 現在のプレイヤーがXかどうか
      xIsNext: true
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    // 履歴を追うためのボタン
    const moves = history.map((_, step) => {
      // 遷移先メッセージ
      const message = step? ('Go to move #' + step): 'Go to game start';

      return (
        <li key={step}>
          <button onClick={() => this.jumpTo(step)}>
            {message}
          </button>
        </li>
      );
    });

    const status = ((winner, xIsNext) => {
      // 勝利プレイヤーがいれば表示
      if (winner) return 'Winner: ' + winner;

      // 次のプレイヤーを表示
      return 'Next player: ' + (xIsNext? 'X': 'O');
    })(winner, this.state.xIsNext);

    return (
      <div className="game">
        <div className="game-board">
          <BoardComponent squares={current.squares}
                          onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    // 勝利プレイヤーがいる、もしくは既に印がある場合
    // 以降の処理をスキップ（印をつけたり、選手を交代したりしない）
    if (calculateWinner(squares) || squares[i]) return;

    // 指定された枠に印
    squares[i] = this.state.xIsNext? 'X': 'O';

    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      // 現在のステップ数
      stepNumber: history.length,
      // 選手交代
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }
}
