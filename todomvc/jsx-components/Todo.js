/* eslint-disable jsx-a11y/anchor-is-valid */
import { dom } from '../lib/state-ui-lib';

function Todo({ id, text, done, onClick, onRemoveClick }) {
  function clickHandler(todoId) {
    return event => {
      event.preventDefault();
      onClick(todoId, event);
    };
  }

  function removeClickHandler(todoId) {
    return event => {
      event.preventDefault();
      onRemoveClick(todoId, event);
    };
  }

  const liStyle = {
    'text-align': 'right',
    padding: '5px',
    margin: '2px',
    'max-width': '200px',
    cursor: 'pointer'
  };

  return (
    <li id={id} style={liStyle}>
      <span
        on={{ click: clickHandler(id) }}
        style={done ? { 'text-decoration': 'line-through' } : undefined}
      >
        {text}
      </span>
      <a
        href='#'
        on={{ click: removeClickHandler(id) }}
        data-testid={`remove-${id}`}
        style={{ 'margin-left': '20px' }}
      >
        X
      </a>
    </li>
  );
}

export default Todo;
