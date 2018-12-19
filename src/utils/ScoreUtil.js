export function calculateWinner(squares) {
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
