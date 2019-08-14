'use strict';

// <li>
//     <span id="2">todo2</span>
//     <span><a href="#">X</a></span>
// </li>


const { dom: d } = require('../lib/state-manager');

function Todo({
    id,
    text,
    done,
    onClick,
    onRemoveClick
}) {
    function clickHandler(id) {
        return function(event) {
            event.preventDefault();
            console.log('clickHandler, id: ', id);
            console.log('event: ', event);
            onClick(id, event);
        }
    }

    function removeClickHandler(id) {
        return function(event) {
            event.preventDefault();
            console.log('removeClickHandler, id: ', id);
            console.log('event: ', event);
            onRemoveClick(id, event);
        }
    }    

    const liStyle = [
        'text-align: right',
        'padding: 5px',
        'margin: 2px',
        'max-width: 200px',
        'cursor: pointer'
    ].join(';');

    return d('li', {
            id: id,
            style: liStyle
        },
        [
            d('span', {
                    on: {
                        click: clickHandler(id)
                    },
                    style: done ? 'text-decoration: line-through;' : ''
                },
                text
            ),
            d('a', {
                    href: '#',
                    on: {
                        click: removeClickHandler(id)
                    },
                    style: 'margin-left: 20px'
                },
                'X'
            )
        ]
    );
}

module.exports = Todo;
