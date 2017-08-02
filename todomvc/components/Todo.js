'use strict';

// <li>
//     <span id="2">todo2</span>
//     <span><a href="#">X</a></span>
// </li>


var d = require('../lib/state-manager').dom;

function Todo(props) {
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

    var liStyle = [
        'text-align: right',
        'padding: 5px',
        'margin: 2px',
        'max-width: 200px',
        'cursor: pointer'
    ].join(';');

    return d('li', {
            id: props.id,
            style: liStyle
        },
        [
            d('span', {
                    events: {
                        click: clickHandler(props.id)
                    },
                },
                props.text
            ),
            d('a', {
                    href: '#',
                    events: {
                        click: removeClickHandler(props.id)
                    },
                    style: 'margin-left: 20px'
                },
                'X'
            )
        ]
    );
}

module.exports = Todo;