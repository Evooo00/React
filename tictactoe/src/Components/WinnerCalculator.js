export function winnerCalculator(squares) {
  const winnerCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];
  for (let i = 0; i < winnerCombinations.length; i++) {
    const [a, b, c] = winnerCombinations[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return console.log("Draw?");
}
