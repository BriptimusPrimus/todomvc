/* eslint-disable react/button-has-type */
import { dom } from '../lib/state-ui-lib';

function AddArea({ onAddButtonClick }) {
  function addButtonClickHandler(event) {
    const todoText = document.querySelector('#todo-description').value;
    event.preventDefault();
    onAddButtonClick(todoText, event);
  }

  return (
    <form>
      <label for='todo-description'>Task: </label>
      <input
        id='todo-description'
        type='text'
        value=''
        placeholder='Todo description'
      />
      <button
        id='add-todo'
        on={{ click: addButtonClickHandler }}
        style={{ 'margin-left': '10px' }}
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddArea;
