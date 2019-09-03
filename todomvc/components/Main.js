// <div id="main">
//     <Todos
//         todos: [{}, {}, {}]
//     />
//     <AddArea />
// </div>

import { dom as d } from '../lib/state-manager';
import Todos from './Todos';
import AddArea from './AddArea';

function Main({ todos, onTodoClick, onRemoveClick, onAddButtonClick }) {
  return d(
    'div',
    {
      id: 'main',
      style: { margin: '100px 10px 50px 50px' }
    },
    Todos({
      todos,
      onTodoClick,
      onRemoveClick
    }),
    AddArea({
      onAddButtonClick
    })
  );
}

export default Main;
