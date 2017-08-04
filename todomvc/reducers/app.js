'use strict';

var actions = require('../actions');

function todos(state, action) {
    switch (action.type) {
        case actions.ADD_TODO:
            return state.concat([{
                id: action.todo.id,
                text: action.todo.text,
                done: false
            }]);

        case actions.REMOVE_TODO:
            return state.filter(function(item) {
                return item.id !== action.id
            });

        case actions.TOGGLE_TODO:
            return state.map(function(item) {
                return item.id === action.id ?
                    Object.assign({}, item, {
                        done: !item.done
                    }) : item
            });

        default:
            return state;
    }
}

function filter(state, action) {
    return state;
}

function app(state, action) {
    return {
        todos: todos(state.todos, action),
        filter: filter(state.filter, action)
    }
}

module.exports = app;