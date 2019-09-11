import { dom as d } from '../../todomvc/lib/state-manager';

// Square
// <button class="square">
//   value
// </button>
function Square({ value, onClick }) {
  return d(
    'button',
    {
      class: 'square',
      on: {
        click: () => {
          onClick();
        }
      }
    },
    value
  );
}

export default Square;
