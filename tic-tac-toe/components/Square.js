/** @jsx d */
import { dom as d } from '../../todomvc/lib/state-manager';

// function Square({ value, onClick }) {
//   return d(
//     'button',
//     {
//       class: 'square',
//       on: {
//         click: onClick
//       }
//     },
//     value
//   );
// }

function Square({ value, onClick }) {
  return (
    <button
      class='square'
      on={{
        click: onClick
      }}
    >
      {value}
    </button>
  );
}

export default Square;
