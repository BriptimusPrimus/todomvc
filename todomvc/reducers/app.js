const { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } = require('../actions');

function todos(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([
        {
          id: action.todo.id,
          text: action.todo.text,
          done: false
        }
      ]);

    case REMOVE_TODO:
      return state.filter(item => {
        return item.id !== action.id;
      });

    case TOGGLE_TODO:
      return state.map(item => {
        return item.id === action.id
          ? Object.assign({}, item, {
              done: !item.done
            })
          : item;
      });

    default:
      return state;
  }
}

function filter(state) {
  return state;
}

function app(state, action) {
  return {
    todos: todos(state.todos, action),
    filter: filter(state.filter, action)
  };
}

module.exports = app;
