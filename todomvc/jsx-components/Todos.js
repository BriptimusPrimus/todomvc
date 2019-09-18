import { dom } from '../lib/state-manager';
import Todo from './Todo';

function Todos({ todos, onTodoClick, onRemoveClick }) {
  function resolveList() {
    return todos.map(item => {
      return (
        <Todo
          id={item.id}
          text={item.text}
          done={item.done}
          onClick={onTodoClick}
          onRemoveClick={onRemoveClick}
        />
      );
    });
  }

  return <ul style={{ 'list-style': 'none' }}>{resolveList()}</ul>;
}

export default Todos;
