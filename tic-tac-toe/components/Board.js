import { dom as d } from '../../todomvc/lib/state-manager';
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
function Board({ squares, onClick }) {
  function renderSquare(i) {
    return Square({
      value: squares[i],
      onClick: () => {
        onClick(i);
      }
    });
  }

  return d(
    'div',
    undefined,
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

export default Board;
