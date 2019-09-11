import {
  dom as d,
  createStore,
  register
} from '../../todomvc/lib/state-manager';
import Square from './Square';

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
    squares: Array(9).fill(null)
  });

  function view(state) {
    const status = 'Next player: X';

    function handleOnClick(i) {
      const squares = state.squares.slice();
      squares[i] = 'X';
      store.dispatch(
        {
          state: { squares }
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
