'use strict';

// <form>
//     <input id="todo-description" type="text">
//     <button>Add Todo<button>
// <form/>

var d = require('../lib/state-manager').dom;

function AddArea(props) {
    function addButtonClickHandler(event) {
        var todoText = document.querySelector('#todo-description').value;
        event.preventDefault();
        props.onAddButtonClick(todoText, event);
    }

    return d('form', {}, [
            d('input', {
                    id: 'todo-description',
                    type: 'text',
                    value: '',
                    placeholder: 'Todo description'
                }
            ),
            d('button', {
                    id: "add-todo",
                    on: {
                        click: addButtonClickHandler
                    },
                    style: 'margin-left: 10px;'
                },
                'Add Todo'
            )
        ]
    );
}

module.exports = AddArea;