'use strict';

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

var $$$ = require('../lib/state-manager');
var Todo = require('./Todo');

function Todos(props) {
    var d = $$$.dom;

    function resolveList(todos) {
        return todos.map(function(item) {
            return Todo({
                id: item.id,
                text: item.text,
                done: item.done,
                onClick: props.onTodoClick,
                onRemoveClick: props.onRemoveClick
            });
        });
    }

    return d('ul', {
            style: 'list-style: none;'
        },
        resolveList(props.todos)
    );
}

module.exports = Todos;