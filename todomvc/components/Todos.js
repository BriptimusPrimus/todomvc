'use strict';

// <ul>
//     <Todo
//         id: 1,
//         text: 'do one'
//     />
//     <Todo
//         id: 2,
//         text: 'do two'
//     />
// </ul>

const { dom: d } = require('../lib/state-manager');
const Todo = require('./Todo');

function Todos({ todos, onTodoClick, onRemoveClick }) {
  function resolveList(todos) {
    return todos.map(item => {
      return Todo({
        id: item.id,
        text: item.text,
        done: item.done,
        onClick: onTodoClick,
        onRemoveClick
      });
    });
  }

  return d(
    'ul',
    {
      style: 'list-style: none;'
    },
    resolveList(todos)
  );
}

module.exports = Todos;
