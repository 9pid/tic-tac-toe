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
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    }
  }

  handleClick(i) {
    // 配列をコピー
    const squares = this.state.squares.slice();

    // 勝利プレイヤーがいる、もしくは既に印がある場合
    // 以降の処理をスキップ（印をつけたり、選手を交代したりしない）
    if (calculateWinner(squares) || squares[i]) return;

    // 指定された枠に印
    squares[i] = this.state.xIsNext? 'X': 'O';

    this.setState({
      squares: squares,
      // 選手交代
      xIsNext: !this.state.xIsNext
    });
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]}
                   onClick={() => this.handleClick(i)} />;
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    const status = ((winner, xIsNext) => {
      // 勝利プレイヤーがいれば表示
      if (winner) return 'Winner: ' + winner;

      // 次のプレイヤーを表示
      return 'Next player: ' + (xIsNext? 'X': 'O');
    })(winner, this.state.xIsNext);

    return (
      <div>
        <div className="status">{status}</div>
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
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
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
