import { toggleTodo, removeTodo, addTodo } from '../actions';

export default function controllersFactory(store) {
  let count = 0;
  const { dispatch } = store;

  function onTodoClick(id) {
    if (!id) {
      return;
    }

    dispatch(toggleTodo(id), true);
  }

  function onRemoveClick(id) {
    if (!id) {
      return;
    }

    dispatch(removeTodo(id), true);
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
      }),
      true
    );
  }

  return {
    onTodoClick,
    onRemoveClick,
    onAddButtonClick
  };
}
