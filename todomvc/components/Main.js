// <div id="main">
//     <Todos
//         todos: [{}, {}, {}]
//     />
//     <AddArea />
// </div>

const { dom: d } = require('../lib/state-manager');
const Todos = require('./Todos');
const AddArea = require('./AddArea');

function Main({ todos, onTodoClick, onRemoveClick, onAddButtonClick }) {
  return d(
    'div',
    {
      id: 'main',
      style: 'margin: 100px 10px 50px 50px;'
    },
    [
      Todos({
        todos,
        onTodoClick,
        onRemoveClick
      }),
      AddArea({
        onAddButtonClick
      })
    ]
  );
}

module.exports = Main;
