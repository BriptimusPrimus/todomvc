'use strict';

// <li>
//     <span id="2">todo2</span>
//     <span><a href="#">X</a></span>
// </li>

var $$$ = require('../lib/state-manager');
var reducer = require('../reducers').todo;
var actions = require('../actions');

function Todo(props) {
    var d = $$$.dom;
    var initialState = {
        iteration: 0
    }
    var component, store;

    function clickHandler(id) {
        return function(event) {
            event.preventDefault();
            console.log('clickHandler, id: ', id);
            console.log('event: ', event);
            props.onClick(id, event);
        }
    }

    function removeClickHandler(id) {
        return function(event) {
            event.preventDefault();
            console.log('removeClickHandler, id: ', id);
            console.log('event: ', event);
            props.onRemoveClick(id, event);
        }
    }

    function iterate() {
        if (props.done) {
            return;
        }

        setTimeout(function() {
            store.dispatch(actions.iterateTodo(), true);
            iterate();
        }, 1000);
    }

    var liStyle = [
        'text-align: right',
        'padding: 5px',
        'margin: 2px',
        'max-width: 200px',
        'cursor: pointer'
    ].join(';');

    var color = {
        0: '#000',
        1: '#F00',
        2: '#0F0',
        3: '#00F',
        4: '#FF0',
        5: '#F80',
        6: '#F0F',
        7: '#888'
    };

    function view(state) {
        return d('li', {
                id: props.id,
                style: liStyle
            },
            [
                d('span', {
                        on: {
                            click: clickHandler(props.id)
                        },
                        style: props.done ? 'text-decoration: line-through;' :
                            'color: ' + (color[state.iteration] || '#FFF')
                    },
                    props.text
                ),
                d('a', {
                        href: '#',
                        on: {
                            click: removeClickHandler(props.id)
                        },
                        style: 'margin-left: 20px'
                    },
                    'X'
                )
            ]
        );
    }

    component = view(initialState);

    store = $$$.register({
        component: component,
        view: view,
        state: initialState,
        reducer: reducer
    });

    iterate();

    return component;
}

module.exports = Todo;
