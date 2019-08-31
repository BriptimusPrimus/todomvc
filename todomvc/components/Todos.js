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

import { dom as d } from '../lib/state-manager';
import Todo from './Todo';

function Todos({ todos, onTodoClick, onRemoveClick }) {
  function resolveList() {
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
      style: { 'list-style': 'none' }
    },
    resolveList()
  );
}

export default Todos;
