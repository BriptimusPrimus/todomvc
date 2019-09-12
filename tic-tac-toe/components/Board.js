import {
  dom as d,
  createStore,
  register
} from '../../todomvc/lib/state-manager';
import Square from './Square';

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

// Board
// <div>
//   <div class="status">status</div>
//   <div class="board-row">
//     <Square />
//     <Square />
//     <Square />
//   </div>
//   <div class="board-row">
//     <Square />
//     <Square />
//     <Square />
//   </div>
//   <div class="board-row">
//     <Square />
//     <Square />
//     <Square />
//   </div>
// </div>
function Board() {
  const store = createStore({
    squares: Array(9).fill(null),
    xIsNext: true
  });

  function view(state) {
    function handleOnClick(i) {
      const squares = state.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = state.xIsNext ? 'X' : 'O';
      store.dispatch(
        {
          state: {
            squares,
            xIsNext: !state.xIsNext
          }
        },
        true
      );
    }

    function renderSquare(i) {
      return Square({
        value: state.squares[i],
        onClick: () => {
          handleOnClick(i);
        }
      });
    }

    const winner = calculateWinner(state.squares);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${state.xIsNext ? 'X' : 'O'}`;
    }

    return d(
      'div',
      {},
      d(
        'div',
        {
          class: 'status'
        },
        status
      ),
      // Row 1
      d(
        'div',
        {
          class: 'board-row'
        },
        renderSquare(0),
        renderSquare(1),
        renderSquare(2)
      ),

      // Row 2
      d(
        'div',
        {
          class: 'board-row'
        },
        renderSquare(3),
        renderSquare(4),
        renderSquare(5)
      ),

      // Row 3
      d(
        'div',
        {
          class: 'board-row'
        },
        renderSquare(6),
        renderSquare(7),
        renderSquare(8)
      )
    );
  }

  const component = register({
    view,
    store
  });

  return component;
}

export default Board;
