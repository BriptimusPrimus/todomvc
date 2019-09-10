import { dom as d } from '../../todomvc/lib/state-manager';
import Board from './Board';

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
      Board()
    ),
    d(
      'div',
      {
        class: 'game-info'
      },
      d(
        'div',
        {}
        // {/* status */}
      ),
      d(
        'ol',
        {}
        // {/* TODO */}
      )
    )
  );
}

export default Game;
