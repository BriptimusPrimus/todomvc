// <form>
//     <input id="todo-description" type="text">
//     <button>Add Todo<button>
// <form/>

import { dom as d } from '../lib/state-ui-lib';

function AddArea({ onAddButtonClick }) {
  function addButtonClickHandler(event) {
    const todoText = document.querySelector('#todo-description').value;
    event.preventDefault();
    onAddButtonClick(todoText, event);
  }

  return d(
    'form',
    null,
    d(
      'label',
      {
        for: 'todo-description'
      },
      'Task: '
    ),
    d('input', {
      id: 'todo-description',
      type: 'text',
      value: '',
      placeholder: 'Todo description'
    }),
    d(
      'button',
      {
        id: 'add-todo',
        on: {
          click: addButtonClickHandler
        },
        style: { 'margin-left': '10px' }
      },
      'Add Todo'
    )
  );
}

export default AddArea;
