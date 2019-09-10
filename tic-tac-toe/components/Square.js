import { dom as d } from '../../todomvc/lib/state-manager';

// Square
// <button class="square">
//   {/* TODO */}
// </button>
function Square({ value }) {
  return d(
    'button',
    {
      class: 'square'
    },
    value
  );
}

export default Square;
