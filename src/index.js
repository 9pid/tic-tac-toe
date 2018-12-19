import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square"
              onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSquare(i) {
    return <Square value={this.props.squares[i]}
                   onClick={() => this.props.onClick(i)} />;
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
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
          <Board squares={current.squares}
                 onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  // 勝利条件
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  // 盤面チェック
  const result = lines.reduce((result, [a, b, c], i) => {
    // 既に勝利していればチェック終了
    if (result) return result;

    // チェック対象の印
    const value = squares[a];

    // 値なしならスキップ
    if (value == null) return null;

    // 勝利していたら、勝利印を返す
    if (squares[b] === value && squares[c] === value) return value;
  }, null);

  return result;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
