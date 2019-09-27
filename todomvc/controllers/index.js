import { toggleTodo, removeTodo, addTodo } from '../actions';

export default function controllersFactory(store) {
  let count = 0;
  const { dispatch } = store;

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

  return {
    onTodoClick,
    onRemoveClick,
    onAddButtonClick
  };
}
