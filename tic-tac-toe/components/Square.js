import {
  dom as d,
  createStore,
  register
} from '../../todomvc/lib/state-manager';

// Square
// <button class="square">
//   {/* TODO */}
// </button>
function Square() {
  // Returns a store with a dispatch function to
  // trigger state changes by dispatching actions.
  const store = createStore({
    value: null
  });

  function view(state) {
    return d(
      'button',
      {
        class: 'square',
        on: {
          click: () => {
            store.dispatch(
              {
                state: { value: 'X' }
              },
              true
            );
          }
        }
      },
      state.value
    );
  }

  const component = register({
    view,
    store
  });

  return component;
}

export default Square;
