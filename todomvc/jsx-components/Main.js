import { dom } from '../lib/state-ui-lib';
import Todos from './Todos';
import AddArea from './AddArea';

function Main({ todos, onTodoClick, onRemoveClick, onAddButtonClick }) {
  return (
    <div id='main' style={{ margin: '100px 10px 50px 50px' }}>
      <Todos
        todos={todos}
        onTodoClick={onTodoClick}
        onRemoveClick={onRemoveClick}
      />
      <AddArea onAddButtonClick={onAddButtonClick} />
    </div>
  );
}

export default Main;
