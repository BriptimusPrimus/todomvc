import { dom, useReducer } from '../lib/state-ui-lib';
import Main from './Main';
import { app as reducer } from '../reducers';
import { toggleTodo, removeTodo, addTodo } from '../actions';

let count = 0;

const App = function App({ initialState, callback }) {
  // In order to make a component stateful, we must
  // define state and how it changes
  const [createNode, dispatch] = useReducer({
    initialState,
    reducer,
    callback
  });

  function onTodoClick(id) {
    if (!id) {
      return;
    }
    dispatch(toggleTodo(id));
  }

  function onRemoveClick(id) {
    if (!id) {
      return;
    }
    dispatch(removeTodo(id));
  }

  function onAddButtonClick(text) {
    if (!text) {
      return;
    }
    count += 1;
    dispatch(
      addTodo({
        id: count,
        text
      })
    );
  }

  function view(state) {
    return Main({
      todos: state.todos,
      onTodoClick,
      onRemoveClick,
      onAddButtonClick
    });
  }

  // All component functions (stateless or stateful)
  // must return the root component node
  return createNode(view);
};

export default App;
