import {
  dom as d,
  createStore,
  register
} from '../../todomvc/lib/state-manager';
import Board from './Board';

function calculateWinner(squares) {
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
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// Game
// <div class="game">
//   <div class="game-board">
//     <Board />
//   </div>
//   <div class="game-info">
//     <div>{/* status */}</div>
//     <ol>{/* TODO */}</ol>
//   </div>
// </div>
function Game() {
  const store = createStore({
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    stepNumber: 0,
    xIsNext: true
  });

  function view(state) {
    function handleClick(i) {
      const history = state.history.slice(0, state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = state.xIsNext ? 'X' : 'O';
      store.dispatch(
        {
          state: {
            history: history.concat([
              {
                squares
              }
            ]),
            stepNumber: history.length,
            xIsNext: !state.xIsNext
          }
        },
        true
      );
    }

    function jumpTo(step) {
      store.dispatch(
        {
          state: {
            stepNumber: step,
            xIsNext: step % 2 === 0
          }
        },
        true
      );
    }

    const { history, stepNumber } = state;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? `Go to move # ${move}` : 'Go to game start';
      return d(
        'li',
        undefined,
        d(
          'button',
          {
            on: {
              click: () => {
                jumpTo(move);
              }
            }
          },
          desc
        )
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${state.xIsNext ? 'X' : 'O'}`;
    }

    return d(
      'div',
      {
        class: 'game'
      },
      d(
        'div',
        {
          class: 'game-board'
        },
        Board({
          squares: current.squares,
          onClick: handleClick
        })
      ),
      d(
        'div',
        {
          class: 'game-info'
        },
        d('div', {}, status),
        d('ol', {}, moves)
      )
    );
  }

  const component = register({
    view,
    store
  });

  return component;
}

export default Game;
