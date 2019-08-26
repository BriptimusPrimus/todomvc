// <li>
//     <span id="2">todo2</span>
//     <span><a href="#">X</a></span>
// </li>

const { dom: d } = require('../lib/state-manager');

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

  return d(
    'li',
    {
      id,
      style: liStyle
    },
    d(
      'span',
      {
        on: {
          click: clickHandler(id)
        },
        style: done ? { 'text-decoration': 'line-through' } : undefined
      },
      text
    ),
    d(
      'a',
      {
        href: '#',
        on: {
          click: removeClickHandler(id)
        },
        'data-testid': `remove-${id}`,
        style: { 'margin-left': '20px' }
      },
      'X'
    )
  );
}

module.exports = Todo;
