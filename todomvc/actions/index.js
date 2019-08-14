

const actions = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO'
};

actions.addTodo = function addTodo(todo) {
  return {
    type: actions.ADD_TODO,
    todo
  };
};

actions.removeTodo = function removeTodo(id) {
  return {
    type: actions.REMOVE_TODO,
    id
  };
};

actions.toggleTodo = function toggleTodo(id) {
  return {
    type: actions.TOGGLE_TODO,
    id
  };
};

module.exports = actions;
